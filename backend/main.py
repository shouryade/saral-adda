from typing import Optional
from fastapi import FastAPI, HTTPException, Depends, Request, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from hashing import Hash
from jwttoken import create_access_token
from oauth import get_current_user
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from geocodehashing import encoder


load_dotenv()
app = FastAPI()


origins = [
    "http://localhost:3000",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    username: str
    company: str
    password: str


class Location(BaseModel):
    lat: str
    long: str
    floor: str


class Login(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


@app.get("/")
# def read_root(current_user: User = Depends(get_current_user)):
async def read_root():
    return {"data": "Hello OWrld"}


restricted = []


@app.post("/api/user/signup")
def createBhumiCode(request: Location):
    try:
        lat = float(request.lat)
        long = float(request.long)

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Please enter valid latitude and logitude values",
        )


@app.post("/api/user/signupzzzz")
def create_user(request: Location):
    if bool((part_form.find_one({"username": request.username}))):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This user already exists!",
        )
    else:
        hashed_pass = Hash.bcrypt(request.password)
        request.password = hashed_pass
        _id = part_form.insert_one(request.dict())

        print(_id.inserted_id)

        return {"res": "created", "id": str(_id.inserted_id)}


@app.post("/api/user/signin")
def login(request: Login):
    user = part_form.find_one({"username": request.username})
    print(user)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No user found with the username {request.username} ",
        )

    if not Hash.verify(user["password"], request.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Wrong Username or password"
        )
    access_token = create_access_token(data={"sub": user["username"]})

    return {"access_token": access_token, "token_type": "bearer"}


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, host="127.0.0.1", port=1339)
