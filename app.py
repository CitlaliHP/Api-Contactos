from fastapi import FastAPI
from starlette.responses import HTMLResponse
import gunicorn

app = FastAPI()

@app.get("/prueba", methods=['GET','POST']) # type: ignore
def prueba():
    template = env.get_template('prueba.html')
    return HTMLResponse(content=template.render(), status_code=200)