import express from "express";
import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    Username: {
        type : String,
    },
    email : {
        type : String,
    },
    password :{
        type : String,
    },
});

const AuthModel = mongoose.model("users",AuthSchema);

export default AuthModel;