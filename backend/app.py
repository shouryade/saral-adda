from fastapi import FastAPI, File, UploadFile
import uvicorn
from fastapi.responses import Response
import os
import numpy as np
from PIL import Image
from pydantic import BaseModel
from typing import Optional
from random import randint
import uuid

from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware

from pymongo import MongoClient

app = FastAPI()
# origins = [
#     "http://localhost:3000",
#     "http://localhost:8080",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db = []


class TokenData(BaseModel):
    username: Optional[str] = None


class User(BaseModel):
    username: str
    phone: int
    password: str


@app.get("/")
async def read_root():
    response = {"WelcomeMessage": "Welcome to the API"}
    return response


@app.post("/register")
async def register(request: User):
    """curl -X 'POST' \
  'http://localhost:1339/register' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "Shourya",
  "phone": 9084022584,
  "password": "De"
}'"""
    # hashed_pass = Hash.bcrypt(request.password)
    user_object = dict(request)
    # user_object["password"] = request.password
    # user_id = db.append(user_object)
    # print(user)
    return {"res": user_object}


@app.post("/images/")
async def create_upload_file(name: str, file: UploadFile = File(...)):
    """POST request with file=path of the file"""
    image = np.array(Image.open(file.file))
    # file.filename = f"{uuid.uuid4()}.jpg"
    # file.filename = f"{name}.jpg"
    # contents = await file.read()
    np.save("output.npy", image, allow_pickle=True, fix_imports=True)
    # db.append(contents)

    # return {"filename": file.filename}
    return {"saved": "hello"}


@app.get("/images/")
async def read_random_file():

    response = Response(content=db[0])

    return response


if __name__ == "__main__":
    uvicorn.run("app:app", reload=True, host="127.0.0.1", port=1339)
