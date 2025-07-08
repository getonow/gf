import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, FileText, CreditCard, Bot, Download } from 'lucide-react';

const NegotiationStrategy: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [negotiationStyle, setNegotiationStyle] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, 
      { role: 'user', content: message },
      { role: 'ai', content: 'Analyzing contract data... Based on your vendor Nordic Injection, I see potential savings of 15% through volume commitments and payment term adjustments. Risk level: Medium.' }
    ]);
    setMessage('');
    setShowDashboard(true);
  };

  const handleOpenNego = () => {
    console.log('Opening negotiation with style:', negotiationStyle);
  };

  // Función placeholder para exportar a PDF
  const handleExportToPDF = () => {
    // TODO: Implementar lógica de exportación a PDF usando html2pdf.js o jspdf
    // Esta función debe capturar tanto la respuesta del agente IA como los gráficos de Plotly
    console.log('Exporting AI response and charts to PDF...');
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AI Nego
            </CardTitle>
            <Select value={negotiationStyle} onValueChange={setNegotiationStyle}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select negotiation style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aggressive">Aggressive</SelectItem>
                <SelectItem value="manipulative">Manipulative</SelectItem>
                <SelectItem value="defensive">Defensive</SelectItem>
                <SelectItem value="collaborative">Collaborative</SelectItem>
                <SelectItem value="competitive">Competitive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              How can I help you today? Ask about negotiation strategies, contract analysis, or risk assessment...
            </p>
            
            <div className="flex gap-2">
              <Input
                placeholder="Ask about negotiation strategies, contract analysis, or risk assessment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {chatHistory.length > 0 && (
              <div className="max-h-40 overflow-y-auto space-y-2">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'}`}>
                    <span className="text-sm font-medium">{msg.role === 'user' ? 'You:' : 'AI:'}</span>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                ))}
              </div>
            )}
            
            <Button 
              onClick={handleOpenNego}
              className="w-full mt-4"
              variant="default"
              disabled={!negotiationStyle}
            >
              Open Nego
            </Button>
            
            {showDashboard && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Potential Savings</h4>
                  <p className="text-2xl font-bold text-green-600">€12,500</p>
                  <Badge variant="secondary">15% reduction</Badge>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Risk Level</h4>
                  <p className="text-lg font-bold text-yellow-600">Medium</p>
                  <Badge variant="outline">Contract flexibility</Badge>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Leverage Points</h4>
                  <p className="text-sm">Volume commitments, Payment terms</p>
                  <Badge variant="default">2 identified</Badge>
                </div>
              </div>
            )}
            
            {showDashboard && (
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Prep Deck
                </Button>
                <Button variant="outline" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Create Cheat Sheet
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Contenedor para gráficos de Plotly */}
      <div id="area-graficos" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Estos div servirán como placeholders para los gráficos de Plotly */}
        {/* Los gráficos se inyectarán dinámicamente desde el backend usando datos JSON */}
        
        <div 
          id="plotly-grafico-1" 
          className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] border border-gray-200"
        >
          {/* Gráfico 1 - Se renderizará aquí dinámicamente */}
        </div>
        
        <div 
          id="plotly-grafico-2" 
          className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] border border-gray-200"
        >
          {/* Gráfico 2 - Se renderizará aquí dinámicamente */}
        </div>
        
        <div 
          id="plotly-grafico-3" 
          className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] border border-gray-200"
        >
          {/* Gráfico 3 - Se renderizará aquí dinámicamente */}
        </div>
        
        <div 
          id="plotly-grafico-4" 
          className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] border border-gray-200"
        >
          {/* Gráfico 4 - Se renderizará aquí dinámicamente */}
        </div>
      </div>
      
      {/* Sección para respuestas del agente IA en formato de texto enriquecido */}
      <div id="respuesta-agente-ia" className="mt-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">AI Agent Response</h3>
            <Button 
              id="boton-exportar-pdf"
              onClick={handleExportToPDF}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export to PDF
            </Button>
          </div>
          
          {/* Área para renderizar texto formateado del backend */}
          {/* Esta sección será poblada dinámicamente con la respuesta del agente IA */}
          {/* Soporta HTML básico como párrafos, listas, texto en negrita, encabezados, etc. */}
          <div className="prose prose-sm max-w-none">
            <div className="text-gray-500 italic p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
              AI agent response will be rendered here...
              <br />
              <span className="text-xs">This area supports rich text formatting including paragraphs, lists, bold text, headers, etc.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NegotiationStrategy;