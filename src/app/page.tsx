"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NutritionLandingPage() {
  const [imcResult, setImcResult] = useState<number | null>(null);
  const [caloriesResult, setCaloriesResult] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Calculadora de IMC
  const calculateIMC = (weight: number, height: number) => {
    const heightInMeters = height / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    setImcResult(Math.round(imc * 10) / 10);
  };

  // Calculadora de calorías
  const calculateCalories = (weight: number, height: number, age: number, gender: string, activity: string) => {
    let bmr: number;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityMultipliers = {
      "sedentary": 1.2,
      "light": 1.375,
      "moderate": 1.55,
      "active": 1.725,
      "very-active": 1.9
    };

    const calories = bmr * (activityMultipliers[activity as keyof typeof activityMultipliers] || 1.2);
    setCaloriesResult(Math.round(calories));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    alert("Gracias por tu mensaje. Te contactaré pronto para agendar tu consulta.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">FaroNutri</h1>
              <span className="ml-2 text-sm text-gray-500 italic">"Ilumina tu camino hacia la nutrición"</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Servicios</a>
                <a href="#sobre-mi" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Sobre Mí</a>
                <a href="#testimonios" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Testimonios</a>
                <a href="#blog" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#contacto" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Contacto</a>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <a href="#contacto">Consulta Gratis</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            ✨ Nutricionista Deportivo Certificado
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforma Tu Vida Con
            <span className="text-green-600"> Nutrición Especializada</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Alcanza tus objetivos de salud y rendimiento con planes de alimentación diseñados específicamente para ti. 
            Asesoramiento profesional presencial y online con resultados comprobados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <a href="#contacto">Agendar Consulta Gratuita</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <a href="#servicios">Conocer Servicios</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-gray-600">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1b838bb-c3cc-41e3-8bb1-382f812712dd.png"
            alt="Nutricionista deportivo masculino profesional realizando consulta online en un ambiente moderno y saludable"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🎯 Servicios Especializados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios de Nutrición Personalizada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrezco una gama completa de servicios nutricionales adaptados a tus necesidades específicas y objetivos de salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consulta Individual */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <CardTitle>Consulta Nutricional Individual</CardTitle>
                <CardDescription>
                  Evaluación completa de tu estado nutricional con plan personalizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Análisis de composición corporal</li>
                  <li>✓ Evaluación de hábitos alimentarios</li>
                  <li>✓ Plan de alimentación personalizado</li>
                  <li>✓ Seguimiento mensual incluido</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$300 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$250 MXN - Online</div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Integral */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <Badge className="w-fit mb-2 bg-green-600 text-white">Más Popular</Badge>
                <CardTitle>Plan Integral 3 Meses</CardTitle>
                <CardDescription>
                  Programa completo con seguimiento continuo y apoyo personalizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 6 consultas individuales</li>
                  <li>✓ Planes de alimentación adaptables</li>
                  <li>✓ Recetas personalizadas</li>
                  <li>✓ Apoyo vía WhatsApp</li>
                  <li>✓ Ajustes según progreso</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$1,500 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$1,200 MXN - Online</div>
                </div>
              </CardContent>
            </Card>

            {/* Nutrición Deportiva */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <CardTitle>Nutrición Deportiva</CardTitle>
                <CardDescription>
                  Especializada para atletas y personas físicamente activas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Plan pre y post entrenamiento</li>
                  <li>✓ Suplementación especializada</li>
                  <li>✓ Hidratación optimizada</li>
                  <li>✓ Rendimiento y recuperación</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$450 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$350 MXN - Online</div>
                </div>
              </CardContent>
            </Card>

            {/* Pérdida de Peso */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <CardTitle>Programa de Pérdida de Peso</CardTitle>
                <CardDescription>
                  Enfoque integral y sostenible para alcanzar tu peso ideal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Estrategias personalizadas</li>
                  <li>✓ Control de ansiedad alimentaria</li>
                  <li>✓ Educación nutricional</li>
                  <li>✓ Seguimiento semanal</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$400 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$320 MXN - Online</div>
                </div>
              </CardContent>
            </Card>

            {/* Alimentación Familiar */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <CardTitle>Alimentación Familiar</CardTitle>
                <CardDescription>
                  Planes nutricionales para toda la familia, incluyendo niños
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Menús familiares balanceados</li>
                  <li>✓ Educación alimentaria para niños</li>
                  <li>✓ Recetas fáciles y nutritivas</li>
                  <li>✓ Manejo de alergias alimentarias</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$500 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$400 MXN - Online</div>
                </div>
              </CardContent>
            </Card>

            {/* Dietas Especiales */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <CardTitle>Dietas Especiales</CardTitle>
                <CardDescription>
                  Vegetarianas, veganas, sin gluten, keto y otras necesidades especiales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Dietas veganas y vegetarianas</li>
                  <li>✓ Sin gluten / Sin lactosa</li>
                  <li>✓ Dietas cetogénicas</li>
                  <li>✓ Condiciones médicas especiales</li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm text-gray-500 mb-2">Modalidades:</div>
                  <div className="text-xl font-bold text-green-600">$380 MXN - Presencial</div>
                  <div className="text-xl font-bold text-blue-600">$300 MXN - Online</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                👨‍🎓 Sobre Mí
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tu Aliado en el Camino Hacia una Vida Más Saludable
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Soy un nutricionista deportivo certificado con más de 5 años de experiencia ayudando a personas 
                como tú a alcanzar sus objetivos de salud y bienestar a través de la alimentación consciente 
                y planes nutricionales personalizados.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificado en Nutrición Deportiva</h4>
                    <p className="text-gray-600 text-sm">Especialización en rendimiento atlético</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificado en Nutrición Clínica</h4>
                    <p className="text-gray-600 text-sm">Manejo especializado de patologías</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Entrenador Personal Certificado</h4>
                    <p className="text-gray-600 text-sm">Enfoque integral nutrición + ejercicio</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificado en Farmacología Deportiva</h4>
                    <p className="text-gray-600 text-sm">Suplementación especializada y segura</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificado en Antropometría ISAK 1</h4>
                    <p className="text-gray-600 text-sm">Evaluación precisa de composición corporal</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4ec2716-458f-45d7-84a2-19a8c70af5c9.png"
                alt="Nutricionista deportivo masculino sonriente en su consulta moderna con certificados y diplomas en la pared"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold text-gray-900">Mi Filosofía</div>
                <p className="text-gray-600 text-sm mt-2">
                  "Cada persona es única, por eso cada plan nutricional debe serlo también"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              ⭐ Testimonios Reales
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historias de Éxito de Mis Pacientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo he ayudado a cientos de personas a transformar su relación con la comida y alcanzar sus objetivos de salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39fc1a66-56c3-422d-b6db-0523414cae6c.png"
                    alt="María S. - Cliente satisfecha sonriendo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">María S.</div>
                    <div className="text-sm text-gray-600">Perdió 15kg en 4 meses</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Después de años probando dietas sin éxito, finalmente encontré un enfoque que funciona. 
                  No solo perdí peso, sino que aprendí a alimentarme de manera saludable para toda la vida."
                </p>
              </CardContent>
            </Card>

            {/* Testimonio 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf0deae7-2587-4443-9ca4-dd4770735791.png"
                    alt="Carlos M. - Atleta masculino satisfecho con su progreso nutricional"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Carlos M.</div>
                    <div className="text-sm text-gray-600">Atleta Amateur</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Como corredor, necesitaba optimizar mi rendimiento. El plan nutricional deportivo me ayudó 
                  a mejorar mis tiempos y acelerar mi recuperación post-entrenamiento."
                </p>
              </CardContent>
            </Card>

            {/* Testimonio 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cbc1b40-82de-49dd-8f64-9e7c08f11a1c.png"
                    alt="Ana L. - Madre de familia feliz con alimentación saludable"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Ana L.</div>
                    <div className="text-sm text-gray-600">Madre de 3 hijos</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Logré implementar hábitos saludables para toda la familia. Mis hijos ahora disfrutan 
                  de comidas nutritivas y yo me siento con más energía que nunca."
                </p>
              </CardContent>
            </Card>

            {/* Testimonio 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0cb6a23f-7323-46da-9b6f-1347f7e89d19.png"
                    alt="Roberto G. - Profesional masculino que mejoró su salud con diabetes"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Roberto G.</div>
                    <div className="text-sm text-gray-600">Diabético Tipo 2</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Mi médico está impresionado con mis niveles de glucosa. El plan alimentario especializado 
                  me permitió controlar mi diabetes sin sacrificar el sabor de las comidas."
                </p>
              </CardContent>
            </Card>

            {/* Testimonio 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8eac40d3-444f-4160-a5b2-c97cfcc53d82.png"
                    alt="Laura P. - Joven profesional que adoptó estilo vegano"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Laura P.</div>
                    <div className="text-sm text-gray-600">Dieta Vegana</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Quería adoptar una dieta vegana pero tenía miedo de las deficiencias nutricionales. 
                  Ahora tengo un plan completo y me siento mejor que nunca."
                </p>
              </CardContent>
            </Card>

            {/* Testimonio 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98d551df-a60c-4f70-8164-0c3e2dda7b2f.png"
                    alt="Diego R. - Empresario masculino que mejoró su energía y productividad"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Diego R.</div>
                    <div className="text-sm text-gray-600">Empresario</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Con mi ritmo de trabajo necesitaba una alimentación que me diera energía constante. 
                  El plan nutricional mejoró mi productividad y calidad de vida notablemente."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              🧮 Herramientas Útiles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculadoras Nutricionales Gratuitas
            </h2>
            <p className="text-xl text-gray-600">
              Utiliza nuestras herramientas para obtener información básica sobre tu estado nutricional.
            </p>
          </div>

          <Tabs defaultValue="imc" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="imc">Calculadora de IMC</TabsTrigger>
              <TabsTrigger value="calorias">Calculadora de Calorías</TabsTrigger>
            </TabsList>

            <TabsContent value="imc" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Calculadora de Índice de Masa Corporal (IMC)</CardTitle>
                  <CardDescription>
                    Calcula tu IMC para conocer si te encuentras en un peso saludable
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const weight = parseFloat(formData.get('weight') as string);
                    const height = parseFloat(formData.get('height') as string);
                    calculateIMC(weight, height);
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="weight">Peso (kg)</Label>
                        <Input 
                          id="weight" 
                          name="weight" 
                          type="number" 
                          placeholder="70" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="height">Altura (cm)</Label>
                        <Input 
                          id="height" 
                          name="height" 
                          type="number" 
                          placeholder="170" 
                          required 
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Calcular IMC
                    </Button>
                  </form>

                  {imcResult && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Tu IMC es: {imcResult}</h4>
                      <p className="text-green-600 text-sm mt-2">
                        {imcResult < 18.5 && "Bajo peso - Consulta con un profesional"}
                        {imcResult >= 18.5 && imcResult < 25 && "Peso normal - ¡Excelente!"}
                        {imcResult >= 25 && imcResult < 30 && "Sobrepeso - Considera mejorar tu alimentación"}
                        {imcResult >= 30 && "Obesidad - Te recomiendo una consulta nutricional"}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calorias" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Calculadora de Requerimientos Calóricos Diarios</CardTitle>
                  <CardDescription>
                    Estima cuántas calorías necesitas por día según tu perfil y actividad física
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const weight = parseFloat(formData.get('cal-weight') as string);
                    const height = parseFloat(formData.get('cal-height') as string);
                    const age = parseFloat(formData.get('cal-age') as string);
                    const gender = formData.get('cal-gender') as string;
                    const activity = formData.get('cal-activity') as string;
                    calculateCalories(weight, height, age, gender, activity);
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <Label htmlFor="cal-weight">Peso (kg)</Label>
                        <Input 
                          id="cal-weight" 
                          name="cal-weight" 
                          type="number" 
                          placeholder="70" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cal-height">Altura (cm)</Label>
                        <Input 
                          id="cal-height" 
                          name="cal-height" 
                          type="number" 
                          placeholder="170" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cal-age">Edad</Label>
                        <Input 
                          id="cal-age" 
                          name="cal-age" 
                          type="number" 
                          placeholder="30" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="cal-gender">Género</Label>
                        <Select name="cal-gender" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu género" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Masculino</SelectItem>
                            <SelectItem value="female">Femenino</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="cal-activity">Nivel de Actividad</Label>
                        <Select name="cal-activity" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu nivel de actividad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedentary">Sedentario (poco o ningún ejercicio)</SelectItem>
                            <SelectItem value="light">Ligero (ejercicio ligero 1-3 días/semana)</SelectItem>
                            <SelectItem value="moderate">Moderado (ejercicio moderado 3-5 días/semana)</SelectItem>
                            <SelectItem value="active">Activo (ejercicio intenso 6-7 días/semana)</SelectItem>
                            <SelectItem value="very-active">Muy activo (ejercicio muy intenso, trabajo físico)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Calcular Calorías Diarias
                    </Button>
                  </form>

                  {caloriesResult && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">
                        Necesitas aproximadamente: {caloriesResult} calorías por día
                      </h4>
                      <p className="text-blue-600 text-sm mt-2">
                        Este es un cálculo estimativo. Para un plan personalizado y preciso, agenda una consulta profesional.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              📝 Blog de Nutrición
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artículos y Consejos Nutricionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado con los últimos consejos, recetas y tendencias en nutrición y alimentación saludable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artículo 1 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0acad894-243d-4af8-a53d-755a8e084ca6.png"
                  alt="Variedad de alimentos ricos en proteínas vegetales coloridos dispuestos en mesa de madera rústica"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-100 text-green-800">Nutrición</Badge>
                <CardTitle className="mb-2">10 Fuentes de Proteína Vegetal Que Debes Conocer</CardTitle>
                <CardDescription className="mb-4">
                  Descubre alternativas vegetales ricas en proteína para diversificar tu alimentación y obtener todos los aminoácidos esenciales.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15 Mar 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.healthline.com/nutrition/protein-for-vegans-vegetarians" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo 2 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42b514f6-e025-471c-8032-d20d36681e6c.png"
                  alt="Desayunos saludables y energéticos con frutas frescas y cereales integrales en bowls coloridos"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-yellow-100 text-yellow-800">Recetas</Badge>
                <CardTitle className="mb-2">5 Desayunos Energéticos Para Empezar el Día</CardTitle>
                <CardDescription className="mb-4">
                  Recetas fáciles y nutritivas que te darán la energía necesaria para afrontar tu jornada con vitalidad.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 Mar 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.eatright.org/food/vitamins-and-supplements/nutrient-rich-foods/energizing-breakfast-ideas" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo 3 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d121436-8298-4cc1-bd97-b205f93065a5.png"
                  alt="Concepto de hidratación deportiva con botellas de agua y frutas frescas en ambiente deportivo"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-blue-100 text-blue-800">Deporte</Badge>
                <CardTitle className="mb-2">Hidratación Óptima Para Deportistas</CardTitle>
                <CardDescription className="mb-4">
                  Todo lo que necesitas saber sobre hidratación antes, durante y después del ejercicio para maximizar tu rendimiento.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 Mar 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.gssiweb.org/sports-science-exchange/article/hydration-for-athletes" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo 4 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6102552f-617e-41ce-9d6b-b5535256872f.png"
                  alt="Planificación de comidas semanales con ingredientes frescos organizados en contenedores"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-purple-100 text-purple-800">Planificación</Badge>
                <CardTitle className="mb-2">Cómo Planificar Tus Comidas de la Semana</CardTitle>
                <CardDescription className="mb-4">
                  Estrategias prácticas para organizar tu alimentación semanal, ahorrar tiempo y mantener una dieta equilibrada.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 Mar 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.healthline.com/nutrition/meal-prep-guide" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo 5 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c39c4377-6e5c-4a92-b4c8-011ac81224cc.png"
                  alt="Concepto educativo sobre mitos nutricionales con iconos de verdadero y falso"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-red-100 text-red-800">Educación</Badge>
                <CardTitle className="mb-2">5 Mitos Nutricionales Que Debes Dejar Atrás</CardTitle>
                <CardDescription className="mb-4">
                  Desmontamos los mitos más comunes sobre alimentación que pueden estar saboteando tus objetivos de salud.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">1 Mar 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.healthline.com/nutrition/common-nutrition-myths" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo 6 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/211f6e9e-3ff2-481d-9cde-6736ae3f3cef.png"
                  alt="Variedad de suplementos nutricionales naturales con vitaminas y minerales en ambiente clínico"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-teal-100 text-teal-800">Suplementos</Badge>
                <CardTitle className="mb-2">¿Necesitas Suplementos Nutricionales?</CardTitle>
                <CardDescription className="mb-4">
                  Guía completa sobre cuándo, cómo y qué suplementos pueden ser beneficiosos para tu salud y bienestar.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">28 Feb 2024</span>
                  <Button variant="ghost" size="sm">
                    <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/supplements/art-20044894" target="_blank" rel="noopener">Leer más →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos los Artículos
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              ❓ Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resuelve Tus Dudas
            </h2>
            <p className="text-xl text-gray-600">
              Las preguntas más comunes sobre mis servicios de nutrición y asesoramiento en línea.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Cómo funciona la consulta online?</h4>
                <p className="text-gray-600">
                  Las consultas se realizan por videollamada a través de plataformas como Zoom o Google Meet. 
                  Previamente recibirás un formulario con preguntas sobre tus hábitos alimentarios y objetivos. 
                  Durante la sesión evaluaremos tu situación y crearemos tu plan personalizado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Qué incluye el plan nutricional personalizado?</h4>
                <p className="text-gray-600">
                  Cada plan incluye: menús semanales detallados, recetas específicas, lista de compras, 
                  recomendaciones de porciones, alternativas de alimentos, y guidelines para diferentes situaciones 
                  (comidas fuera de casa, viajes, etc.). Todo adaptado a tus gustos, presupuesto y estilo de vida.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Con qué frecuencia debo hacer seguimiento?</h4>
                <p className="text-gray-600">
                  Recomiendo un seguimiento cada 2-4 semanas dependiendo de tus objetivos. Para pérdida de peso, 
                  cada 2 semanas es ideal. Para mantenimiento o cambios de hábitos, cada 3-4 semanas es suficiente. 
                  Siempre puedes contactarme vía WhatsApp para dudas urgentes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Trabajas con condiciones médicas específicas?</h4>
                <p className="text-gray-600">
                  Sí, tengo experiencia trabajando con diabetes, hipertensión, síndrome metabólico, 
                  trastornos digestivos, alergias alimentarias, y otras condiciones. Siempre trabajo 
                  en coordinación con tu médico tratante para asegurar el enfoque más seguro y efectivo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Ofreces planes para vegetarianos y veganos?</h4>
                <p className="text-gray-600">
                  Absolutamente. Tengo especialización en dietas vegetarianas y veganas, asegurando 
                  que obtengas todos los nutrientes esenciales. Creo planes deliciosos y variados 
                  que cubren completamente tus requerimientos nutricionales.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">¿Qué métodos de pago aceptas?</h4>
                <p className="text-gray-600">
                  Acepto transferencias bancarias, PayPal, y pagos con tarjeta de crédito/débito. 
                  Para planes de varios meses, ofrezco facilidades de pago. El pago se realiza 
                  antes de cada consulta o al inicio del programa elegido.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              💬 Contacto
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo Para Transformar Tu Alimentación?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agenda tu consulta gratuita de 15 minutos y descubre cómo puedo ayudarte a alcanzar tus objetivos nutricionales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Solicita Tu Consulta Gratuita</CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaré dentro de las próximas 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input 
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono (Opcional)</Label>
                    <Input 
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+52 56 1706 6356"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Tipo de Consulta</Label>
                    <Select value={contactForm.service} onValueChange={(value) => setContactForm({...contactForm, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Consulta Individual</SelectItem>
                        <SelectItem value="integral">Plan Integral 3 Meses</SelectItem>
                        <SelectItem value="deportiva">Nutrición Deportiva</SelectItem>
                        <SelectItem value="perdida-peso">Pérdida de Peso</SelectItem>
                        <SelectItem value="familiar">Alimentación Familiar</SelectItem>
                        <SelectItem value="especial">Dietas Especiales</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Cuéntame Sobre Tu Situación</Label>
                    <Textarea 
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Describe brevemente tus objetivos nutricionales, condiciones especiales, o cualquier información relevante..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Solicitud de Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">nexuwebstudios@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">📱</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <div className="text-gray-600">+52 56 1706 6356</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">🕐</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Horario de Atención</div>
                      <div className="text-gray-600">Lun - Vie: 9:00 - 18:00</div>
                      <div className="text-gray-600">Sáb: 9:00 - 14:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Por Qué Elegir Mis Servicios?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-gray-600">Planes 100% personalizados basados en tus necesidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-gray-600">Seguimiento continuo y ajustes según tu progreso</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-gray-600">Enfoque integral: nutrición + educación alimentaria</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-gray-600">Flexibilidad total con consultas 100% online</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-gray-600">Más de 500 casos de éxito documentados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🎁 Oferta Especial</h4>
                <p className="text-green-700 text-sm mb-3">
                  ¡Primera consulta GRATUITA de 15 minutos! Conoce mi metodología y recibe recomendaciones iniciales sin compromiso.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <a href="#contacto">Agendar Consulta Gratuita</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">FaroNutri</h3>
              <p className="text-gray-300 mb-4">
                Tu aliado en el camino hacia una vida más saludable a través de la nutrición personalizada y el asesoramiento profesional.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-300 hover:text-green-400">Consulta Individual</a></li>
                <li><a href="#servicios" className="text-gray-300 hover:text-green-400">Plan Integral</a></li>
                <li><a href="#servicios" className="text-gray-300 hover:text-green-400">Nutrición Deportiva</a></li>
                <li><a href="#servicios" className="text-gray-300 hover:text-green-400">Pérdida de Peso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-300 hover:text-green-400">Blog de Nutrición</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Calculadora IMC</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Recetas Saludables</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400">Guías Descargables</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 nexuwebstudios@gmail.com</li>
                <li>📱 +52 56 1706 6356</li>
                <li>🕐 Lun-Vie: 9:00-18:00</li>
                <li>🕐 Sáb: 9:00-14:00</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 FaroNutri. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              Desarrollado con 💚 para transformar vidas a través de la nutrición
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}