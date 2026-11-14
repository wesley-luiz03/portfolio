// Edite aqui o conteúdo. A página se monta sozinha a partir destes dados.
// Ícones: nome do ícone no Simple Icons (simpleicons.org). Sem ícone, use null e as iniciais.
window.DATA = {
  skills: [
    ["Oracle SQL","oracle"],["Winthor TOTVS",null,"WT"],["Grafana","grafana"],["Power BI","powerbi"],["Excel","microsoftexcel"],["Python","python"],
    ["Next.js","nextdotjs"],["TypeScript","typescript"],["Tailwind CSS","tailwindcss"],["Supabase","supabase"],["Java","openjdk"],["Delphi",null,"Dp"],
    ["Git","git"],["GitHub","github"],["Docker","docker"],["Scrum",null,"Sc"],["Kanban",null,"Kb"],["Gestão de projetos",null,"GP"]
  ],
  abc: [["Mercado Boa Vista",182],["Atacado Recife",151],["Padaria Central",118],["Rede Litoral",96],["Mini Box Várzea",71],["Empório Sol",58],["Cantina Dois Rios",44],["Bar do Pátio",31],["Loja Aurora",24],["Quitanda Nova",17],["Lanchonete Praia",11],["Cantinho Verde",7]],
  reports: [
    ["Compras de itens de serviços, anual","Quanto a empresa comprou de cada item de serviço, mês a mês, em quantidade e valor?","Pivô mensal com CASE, subquery de entradas, filtro por departamento e seção, parâmetro de ano"],
    ["Análise de itens por fornecedor","Como cada item de um fornecedor vendeu no ano, já descontando devoluções, e para quantos clientes?","CTEs de vendas e devoluções, positivação com COUNT DISTINCT, DECODE por mês"],
    ["Comparativo de venda anual","As vendas deste ano estão acima ou abaixo do ano anterior, por vendedor, supervisor e cliente?","CTEs, vendas menos entradas, colunas de ano anterior e atual lado a lado"],
    ["Comparativo anual por produto","Quais produtos cresceram ou caíram na comparação entre dois anos?","Agregação por produto, comparação de períodos, parâmetros de ano"],
    ["Comparativo anual por cliente","Quais clientes compraram mais ou menos que no ano anterior?","Agregação por cliente, comparação de períodos, parâmetros de ano"],
    ["Curva ABC por cliente","Quais poucos clientes concentram a maior parte do faturamento e com que margem?","Window function acumulada, classes A, B e C, participação e margem por mês, pivô com MAX"],
    ["Estoque geral disponível","O que realmente pode ser vendido agora em cada departamento e seção?","Estoque gerencial menos reservado e bloqueado, JOIN de produto, departamento e seção"]
  ],
  // [título, descrição, link, tecnologias, imagem opcional]. Para usar print do projeto, salve em assets/projects/ e informe o caminho.
  projects: [
    ["Recadastro de Membros 2IBA","Sistema de recadastro dos membros da 2IBA, feito para substituir a digitação manual de dados no Eklesia.","https://github.com/wesley-luiz03/Forms2iba",["nextdotjs","supabase"],""],
    ["Centro de Links da 2IBA","Página que reúne os principais links da igreja em um só lugar.","https://github.com/wesley-luiz03/linktree2IBA",[],""],
    ["Site Oficial 2IBA","Site oficial da 2ª Igreja Batista de Areias.","https://github.com/wesley-luiz03/2ibaweb",[],""]
  ],
  academic: [
    ["ConnectNutri","Agendamentos de uma clínica da UNIFAFIRE, com lembretes e remarcação após 7 dias.","",[],"assets/projects/connectnutri.png","contain"],
    ["Capibariver","Projeto socioambiental sobre a revitalização do Rio Capibaribe, para crianças de 8 a 12 anos.","",[],"assets/projects/capibariver.png","cover"]
  ]
};
