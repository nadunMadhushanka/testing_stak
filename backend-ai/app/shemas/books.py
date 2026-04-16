from pydantic import BaseModel

class booksInput(BaseModel):
    name:str


class booksOutput(BaseModel):
    enhanced_text: str