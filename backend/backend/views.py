from django.http import HttpResponse
from django.template import Template, Context
import datetime
from django.template import loader
from django.shortcuts import render

class Persona(object):
  def __init__(self, nombre, apellido):
    self.nombre = nombre
    self.apellido = apellido
    
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

def saludito(request):
  persona1 = Persona("Javier", "Perez")
  leer_template = open("C:/Users/Windows/Documents/react-django/backend/backend/templates/saludo.html")
  saludo_template = Template(leer_template.read())
  leer_template.close()
  ctx = Context({'nombre': persona1.nombre, 'apellido': persona1.apellido})
  return HttpResponse(saludo_template.render(ctx))

def mostrar_varios_objetos(req):
  my_list = []#["Perro", "Gato", "Loro", "Tortuga", "Pez"]
  fecha_html = open("C:/Users/Windows/Documents/react-django/backend/backend/templates/listas.html")
  fecha_tmpl = Template(fecha_html.read())
  fecha_html.close()
  ctx = Context({"objects_list": my_list})

  return HttpResponse(fecha_tmpl.render(ctx))

def using_loader(req):
  my_list = ["Perro", "Gato", "Loro", "Tortuga", "Pez"]
  fecha_tmpl = loader.get_template('listas.html')

  return HttpResponse(fecha_tmpl.render({"objects_list": my_list}))

def using_render(req):
  my_list = ["Perro", "Gato", "Loro", "Tortuga", "Pez"]
  return render(req, 'listas.html', {"objects_list": my_list})

def anidar_plantilla(req):
  return render(req, 'index.html')
