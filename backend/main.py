from typing import Optional
from fastapi import FastAPI, HTTPException, Depends, Request, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel


from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv

from geocodehashing import written_format, decoder


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


class Location(BaseModel):
    lat: str
    long: str
    floor: str


class Bhumicode(BaseModel):
    bhumicode: str


restricted = []


@app.post("/api/generate/bhumicode")
async def createBhumiCode(request: Location):
    try:
        floor = int(request.floor)
    except:
        floor = 0

    try:
        lat = float(request.lat)
        long = float(request.long)

        if lat < 38 and lat >= 8 and long < 98 and long >= 68:
            obj = written_format(lat, long, restrict_loc=restricted, floor=floor)
            return {"res": obj}
        else:
            return False

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Please enter valid latitude,logitude and floor values",
        )


@app.post("/api/generate/location")
async def createLocation(request: Bhumicode):
    input_word = request.bhumicode
    obj = decoder(input_word)
    return {"res": obj}


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, host="127.0.0.1", port=1339)
