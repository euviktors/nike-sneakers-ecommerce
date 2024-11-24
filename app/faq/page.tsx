import { Layout } from '@/components/layout/Layout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qual é o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com a sua localização. Geralmente, entregamos em até 7 dias úteis para capitais e regiões metropolitanas, e até 15 dias úteis para outras localidades."
  },
  {
    question: "Como faço para rastrear meu pedido?",
    answer: "Após o envio do seu pedido, você receberá um e-mail com o código de rastreamento. Basta acessar nossa página de rastreamento e inserir o código para acompanhar o status da entrega."
  },
  {
    question: "Qual é a política de trocas e devoluções?",
    answer: "Aceitamos trocas e devoluções em até 30 dias após o recebimento do produto. O item deve estar em perfeitas condições, sem sinais de uso e na embalagem original."
  },
  {
    question: "Vocês oferecem garantia nos produtos?",
    answer: "Sim, todos os nossos produtos têm garantia de 90 dias contra defeitos de fabricação."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos cartões de crédito, boleto bancário e PIX."
  }
]

export default function FAQPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Perguntas Frequentes</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  )
}

