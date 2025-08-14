import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataCard } from "./DataCard";
import { ThemeToggle } from "./ThemeToggle";
import { generateCPF, generateCNPJ, generateName, generateCompanyName } from "@/utils/generators";
import { RefreshCw } from "lucide-react";

interface GeneratedData {
  person: {
    name: string;
    cpf: string;
  };
  company: {
    name: string;
    cnpj: string;
  };
}

export function ProposalGenerator() {
  const [data, setData] = useState<GeneratedData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const newData: GeneratedData = {
      person: {
        name: generateName(),
        cpf: generateCPF(),
      },
      company: {
        name: generateCompanyName(),
        cnpj: generateCNPJ(),
      },
    };
    
    setData(newData);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 relative">
          {/* Theme Toggle */}
          <div className="absolute top-0 right-0 sm:right-4">
            <ThemeToggle />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Gerador de Proposta
          </h1>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-8 py-4 text-lg shadow-medium transition-all duration-300 hover:shadow-large hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-medium disabled:opacity-70 border border-primary/20"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Gerando...
              </>
            ) : (
              "Gerar Proposta"
            )}
          </Button>
        </div>

        {/* Generated Data Cards */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <DataCard
              title="Dados do Sócio"
              name={data.person.name}
              document={data.person.cpf}
              documentLabel="CPF"
            />
            <DataCard
              title="Empresa"
              name={data.company.name}
              document={data.company.cnpj}
              documentLabel="CNPJ"
            />
          </div>
        )}

        {/* Info Footer */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>Todos os dados gerados são fictícios e criados com algoritmos de validação.</p>
        </div>
      </div>
    </div>
  );
}