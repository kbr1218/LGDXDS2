# config.py
from dotenv import load_dotenv
import os

# API KEY 정보 로드
load_dotenv()
GEMINI_API_KEY = os.getenv('API_KEY_GEMINI')
OPENAI_API_KEY = os.getenv('API_KEY_OPENAI')

# FAISS 벡터스토어 path
VECTORSTORE_PATH_MOVIE = "db/movies_FAISS_1630_0123"
VECTORSTORE_PATH_VIEW_100 = "db/views_FAISS_test100"

# LangSmith logging proj. name
LOGGING_NAME = "lgdx_team2_routerchain"