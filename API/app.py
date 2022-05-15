from fastapi import FastAPI
from routes.user import user
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
	title="Dinamico API",
	description="Le cree el API a Dinamico",
	version="0.0.1",
	openapi_tags=[{
		"name": "users",
		"description": "users routes"
	}]
)
origins = [
    "http://localhost",
    "http://localhost:8000",
	"http://localhost:8101",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

	

app.include_router(user)