from django.http import HttpResponse
from django.template import Template, Context
import datetime

def saludo(request):

  doc_externo = open('C:/Users/Windows/Documents/react-django/backend/backend/views.py')
  template = Template(doc_externo.read())
  doc_externo.close()
  ctx=Context()
  return HttpResponse("Hello world")

def calculo(request, edad, year):
  periodo = year - 2024
  edadFutura = edad + periodo
  documento=f"<html><body>En el año {year} tendrás {edadFutura} años</body></html>"
  return HttpResponse(documento)

def dame_fecha(request):
  leer_fecha = open('C:/Users/Windows/Documents/react-django/backend/backend/templates/fecha.html')
  fecha_tplt = Template(leer_fecha.read())
  leer_fecha.close()
  fecha_now = datetime.datetime.now()
  ctx=Context({'fecha_hora': fecha_now})
  return HttpResponse(fecha_tplt.render(ctx))


