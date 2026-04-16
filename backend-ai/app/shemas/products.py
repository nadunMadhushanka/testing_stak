from pydantic import BaseModel

class productInput(BaseModel):
    name: str
    category: str


class productOutput(BaseModel):
    description: str
    tags: list[str]