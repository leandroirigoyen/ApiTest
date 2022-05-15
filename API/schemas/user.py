import email
from unicodedata import name
import idna
from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
	id: Optional[str]
	name: str
	email: str
	password: str