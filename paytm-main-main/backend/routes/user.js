const express=require("express")

const { User, Account } = require("../db");
const zod=require("zod")
const router=express.Router()  
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config"); 
const {authMiddleware} = require("../middleware");

const signupbody=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string().min(8),
})


router.post("/signup", async (req, res) => {
    const { success } = signupbody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})



const signinbody=zod.object({
    username:zod.string().email(),
    password:zod.string()

})
router.post("/signin",async(req,res)=>{
const {success}=signinbody.safeParse(req.body)

if(!success){
    return res.status(400).json({
        msg:"Incorrect username or password "
    })
}

const user=await User.findOne({
username:req.body.username,
password:req.body.password
})


if(user){
    const token=jwt.sign({
        userId:user._id,
    },JWT_SECRET)

    res.json({
        token:token
    })
    return;
}
res.status(411).json({
    message: "Error while logging in"
})
})



const updateBody=zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/",authMiddleware,async (req,res)=>{
    const {success}=updateBody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            msg:"Error while updating   "
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })
    
    res.status(200).json({
        msg:"User updated successfullt "
    })
    
 })

module.exports=router;