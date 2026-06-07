// ============================================================
// ALL 91 QUESTIONS — from validated PDF
// topics: RUM, Synthetic, DQL, Logs, Security, K8s, Cloud,
//         Infra, Tracing, Dashboards, Extensions, Alerts, Core, Business
// ============================================================
const ALL_QUESTIONS = [
  {
    id:1, type:'single', topic:'Business Events',
    text:'Preciso capturar dados empresariais no meu sistema que sejam completos, granulares, sem restrições e disponíveis em tempo real, incluindo todas as ações e seus impactos de desempenho, com contexto ao longo do tempo para análise imediata da experiência do usuário final.',
    options:['Dynatrace OneAgent','Business Events','Dynatrace RUM','Dynatrace ActiveGate','Logs'],
    correct:[1]
  },
  {
    id:2, type:'multi', topic:'RUM',
    text:'Quais tipos de User Actions existem no Dynatrace?',
    options:['XHR Actions','Click Actions','Custom Actions','Load Actions'],
    correct:[0,2,3]
  },
  {
    id:3, type:'single', topic:'RUM',
    text:'Como o Dynatrace RUM pode ser adicionado a um site quando não é possível instalar o OneAgent no servidor?',
    options:['Dynatrace OneAgent em modo Discovery','Dynatrace Operator','Agentless RUM','Dynatrace ActiveGate'],
    correct:[2]
  },
  {
    id:4, type:'single', topic:'Business Events',
    text:'Preciso de controle detalhado sobre os dados de Business Events ingeridos. Qual atributo me permite alcançar isso?',
    options:['dt.trace_id','dt.span.id','dt.entity.process_group.instance','dt.security.context'],
    correct:[3]
  },
  {
    id:5, type:'single', topic:'Infra',
    text:'Ao atualizar um OneAgent ou ActiveGate, o que acontece com seus arquivos de configuração (em Linux /var/lib/Dynatrace/*)?',
    options:['Cada atualização cria uma nova pasta/versão','Os arquivos são atualizados e as configurações existentes são sobrescritas','Os arquivos são preservados','As configurações são copiadas para um arquivo de backup durante a atualização'],
    correct:[2]
  },
  {
    id:6, type:'single', topic:'Logs',
    text:'Qual capacidade do Dynatrace pode ser usada para consultar os dados de Log ingeridos?',
    options:['USQL','DQL','JavaScript','SQL'],
    correct:[1]
  },
  {
    id:7, type:'single', topic:'Tracing',
    text:'Dado um cenário em que você tem um serviço com um problema de alta taxa de falhas, qual página do serviço deve ser verificada primeiro?',
    options:['Comparisons','Failure Analysis','Distributed Traces','Response Time Hotspots'],
    correct:[2]
  },
  {
    id:8, type:'single', topic:'Business Events',
    text:'Qual linguagem é necessária para consultar dados de Business Events?',
    options:['DQL','USQL','SQL','Grail'],
    correct:[0]
  },
  {
    id:9, type:'single', topic:'Cloud',
    text:'Se um provedor de nuvem não permite a instalação do OneAgent em um serviço específico (como load balancers fornecidos pela nuvem), existe alguma forma de obter dados em nível de código?',
    options:['Não, os provedores de nuvem usam ferramentas proprietárias incompatíveis com o Dynatrace','Sim, todos os serviços suportam o uso de OpenTelemetry para enviar dados de nível de código ao Dynatrace','Não, apenas dados de metrics e logs estão disponíveis','Depende — se o provedor de nuvem suportar o envio de dados no formato OpenTelemetry, pode ser possível ingerir no Dynatrace'],
    correct:[3]
  },
  {
    id:10, type:'multi', topic:'RUM',
    text:'Quais são os diferentes tipos de User no Dynatrace?',
    options:['Real','Synthetic','Robots','Human'],
    correct:[0,1,2]
  },
  {
    id:11, type:'multi', topic:'Infra',
    text:'Quero visualizar metadata de versionamento dos componentes que monitoro no Dynatrace. Quais opções tenho para configurar esses dados?',
    options:['Kubernetes labels','Smartscape','Environment variables','Events ingestion','Security vulnerability'],
    correct:[0,2,3]
  },
  {
    id:12, type:'multi', topic:'Logs',
    text:'Em quais níveis de ambiente as regras de ingestão de logs podem ser configuradas?',
    options:['Host Group','Process Group','Active Gate','Host','Environment'],
    correct:[0,3,4]
  },
  {
    id:13, type:'multi', topic:'Security',
    text:'O Credential Vault armazena informações sensíveis para quais capacidades do Dynatrace?',
    options:['Dynatrace API','Synthetic Browser monitors','Synthetic HTTP monitors','Dynatrace Apps','Dynatrace Extensions v2'],
    correct:[1,2,3,4]
  },
  {
    id:14, type:'single', topic:'Alerts',
    text:'Quero reduzir o mean-time-to-identify de vulnerabilidades críticas de segurança no meu ambiente, enviando uma notificação para o canal do Slack da equipe correta quando forem detectadas. Como posso alcançar isso?',
    options:['Verificar manualmente a página de Security Vulnerability','Application Security app','Workflow com Event Trigger, Ownership e integração com Slack','Verificar manualmente a página de Problems'],
    correct:[2]
  },
  {
    id:15, type:'single', topic:'RUM',
    text:'Quando uma sessão está disponível para análise com USQL?',
    options:['Após a conclusão da sessão','Início da sessão','Somente quando a repetição da sessão estiver ativada','10 minutos após o início da sessão'],
    correct:[0]
  },
  {
    id:16, type:'multi', topic:'RUM',
    text:'Em que os conversion goals podem ser baseados?',
    options:['Destination URL','Number of Errors on Session end','Session Duration','Number of Actions per Session','Specific User Action'],
    correct:[0,2,3,4]
  },
  {
    id:17, type:'multi', topic:'Infra',
    text:'Quais das seguintes necessidades podem ser atendidas com Host Groups?',
    options:['Categorizar e gerenciar múltiplos hosts que compartilham características ou propósitos semelhantes','Melhorar a eficiência das implantações do OneAgent','Representar logicamente grupos de usuários dentro de uma organização','Habilitar conectividade com ActiveGate'],
    correct:[0]
  },
  {
    id:18, type:'single', topic:'RUM',
    text:'Um desenvolvedor quer saber quanto tempo levou para sua aplicação carregar uma requisição de recurso específica como parte do clique em um botão. Qual ferramenta seria mais apropriada?',
    options:['A aplicação "Web"','User action analysis','Waterfall analysis','User Session Query Language'],
    correct:[2]
  },
  {
    id:19, type:'single', topic:'Tracing',
    text:'Qual atributo fornece um valor único para visualizar uma transação de ponta a ponta?',
    options:['Service type','Process id','W3C trace id','Span kind'],
    correct:[2]
  },
  {
    id:20, type:'multi', topic:'Logs',
    text:'Quais opções estão disponíveis para mascarar dados sensíveis em Logs?',
    options:['Log Events','Mask at capture','Masking at ingest','Mask in Dashboard','Workflow'],
    correct:[1,2]
  },
  {
    id:21, type:'single', topic:'RUM',
    text:'Um colega quer ver o tempo de Visually Complete e o tempo de User Action para um subconjunto de ações do usuário, filtradas por uma propriedade específica e por várias geolocalizações, podendo ver todas as ações com o mesmo nome em vários aplicativos. Qual ferramenta é mais apropriada?',
    options:['Multidimensional Analysis for User Actions','Data Explorer','User Sessions Query Language (USQL)','Notebooks','Dashboards'],
    correct:[0]
  },
  {
    id:22, type:'single', topic:'Synthetic',
    text:'Quais dos seguintes Synthetics simulam um usuário realizando múltiplas ações em seu(s) site(s)?',
    options:['Ping test','Single-URL browser monitors','Browser clickpaths','HTTP monitor'],
    correct:[2]
  },
  {
    id:23, type:'single', topic:'Alerts',
    text:'Quais são as diferentes Event Categories no Dynatrace?',
    options:['Critical, Availability, Error, Slowdown, Resource, Warning, Custom, Info','Monitoring Unavailable, Availability, Error, Slowdown, Resource, Custom, Info','Availability, Error, Slowdown, Resource','Critical, Error, Warning, Info'],
    correct:[1]
  },
  {
    id:24, type:'single', topic:'K8s',
    text:'Para tecnologias suportadas, os workloads e pods Kubernetes são monitorados de forma diferente dos processos tradicionalmente monitorados pelo OneAgent?',
    options:['Sim, devem ser instrumentados com OpenTelemetry para obter insights profundos','Não, workloads e pods mostram métricas diferentes, mas fornecem a mesma informação geral','Não, workloads e pods mostram exatamente as mesmas métricas que um processo','Sim, não terão nenhum dado de estado do serviço quando monitorados com Dynatrace'],
    correct:[1]
  },
  {
    id:25, type:'single', topic:'Cloud',
    text:'Uma equipe procura você para obter informações em nível de código no Dynatrace sobre uma AWS Lambda/Azure Function. Supondo que ela esteja instrumentada com OneAgent, qual é o melhor local para obter informações sobre a função?',
    options:['Hosts page','AWS/Azure page','Logs page','Services page'],
    correct:[3]
  },
  {
    id:26, type:'multi', topic:'K8s',
    text:'Quais destes apps posso usar para analisar os dados do meu cluster Kubernetes ou OpenShift, como eventos do cluster e métricas?',
    options:['Infrastructure & Operations','Kubernetes Classic','Kubernetes','Notebooks','Clouds'],
    correct:[1,2,3]
  },
  {
    id:27, type:'single', topic:'Synthetic',
    text:'Qual capacidade do Synthetic permitirá que minha organização monitore sites internos (acesso apenas interno)?',
    options:['Public Synthetics','Dynatrace Synthetic Recorder extension','Synthetic On-demand execution','Private Synthetics'],
    correct:[3]
  },
  {
    id:28, type:'single', topic:'Logs',
    text:'Preciso restringir o acesso a determinados arquivos de log para usuários específicos do Dynatrace. Qual capacidade fornece isso?',
    options:['SAML Configuration','Log Security Context','Log Processing rules','OAuth token','Log Viewer'],
    correct:[1]
  },
  {
    id:29, type:'single', topic:'Alerts',
    text:'Preciso tirar meu ambiente de produção do ar enquanto realizo uma atualização que coincidirá com testes Synthetic agendados. O que posso configurar no Dynatrace para evitar alertas falsos?',
    options:['Deletar os monitores Synthetic','Maintenance Window','Synthetic On-demand execution','Credential vault'],
    correct:[1]
  },
  {
    id:30, type:'single', topic:'Dashboards',
    text:'Qual app seria mais adequado para salvar os resultados de consultas de log para análise posterior?',
    options:['Notebooks','Site Reliability Guardian','Logs & Events','Dashboards'],
    correct:[0]
  },
  {
    id:31, type:'single', topic:'Synthetic',
    text:'Quero usar a rede global de locais de Synthetic Monitoring do Dynatrace para monitorar minha aplicação. Qual capacidade fornece isso?',
    options:['Public Synthetics','Synthetic On-demand execution','Dynatrace Apps','Private Synthetics'],
    correct:[0]
  },
  {
    id:32, type:'multi', topic:'Infra',
    text:'Quais métricas são apresentadas no aplicativo Databases?',
    options:['Chamadas de usuário','Consumo de memória','Sessões ativas','Insights em nível de código','Vulnerabilidades do banco de dados'],
    correct:[0,1,2]
  },
  {
    id:33, type:'multi', topic:'Core',
    text:'Onde posso encontrar as últimas notícias sobre lançamentos, blogs e inovações do Dynatrace?',
    options:['github.com/Dynatrace','youtube.com/hashtag/dynatrace','wikipedia.org/wiki/Dynatrace','dynatrace.com/news/blog','dynatrace.com/news/engineering'],
    correct:[3,4]
  },
  {
    id:34, type:'multi', topic:'Core',
    text:'Quais dos seguintes são recursos de suporte do Dynatrace disponíveis para os usuários?',
    options:['Dynatrace Developer','OneAgent bulletin board sessions','Dynatrace Community','Dynatrace Live Chat','Dynatrace Support Tickets','Dynatrace Documentation'],
    correct:[0,2,3,4,5]
  },
  {
    id:35, type:'single', topic:'Dashboards',
    text:'No Data Explorer, quantas métricas você pode adicionar a um único gráfico?',
    options:['3','5','7','10'],
    correct:[3]
  },
  {
    id:36, type:'multi', topic:'Alerts',
    text:'Quais dos seguintes podem fazer parte de uma problem page?',
    options:['Impacted Entities','Fault Isolation','Root Cause','Business Impact Analysis'],
    correct:[0,2,3]
  },
  {
    id:37, type:'multi', topic:'Security',
    text:'Em quais condições você pode silenciar (mute) ou dessilenciar (unmute) uma vulnerabilidade?',
    options:['Se uma vulnerabilidade está resolvida','Para uma Management Zone específica','Para um CVE específico','Para um Process Group específico','Se uma vulnerabilidade está aberta'],
    correct:[2,4]
  },
  {
    id:38, type:'multi', topic:'Security',
    text:'Quais são os recursos críticos disponíveis com a funcionalidade de Application Security do Dynatrace?',
    options:['On-Demand Code Security Analysis','Automatic Vulnerability Remediation','Runtime Application Protection','Runtime Vulnerability Analytics'],
    correct:[2,3]
  },
  {
    id:39, type:'single', topic:'Cloud',
    text:'Ao usar as integrações nativas de cloud do Dynatrace (GCP, AWS, Azure), que tipo de dados de monitoramento são ingeridos no Dynatrace?',
    options:['Code-level data','Logs','Real user monitoring','Metrics'],
    correct:[3]
  },
  {
    id:40, type:'single', topic:'Cloud',
    text:'Se uma integração com a nuvem está configurada para uma instância EC2 ou VM, mas você não vê nenhum Service no Dynatrace para o seu sistema, qual é a razão mais provável?',
    options:['O provedor de nuvem não suporta o OneAgent no tipo específico de instância','O OneAgent não está instalado na instância EC2 ou VM','A instância EC2 ou VM não possui as permissões adequadas para obter dados de monitoramento da nuvem','Os dados de log não estão sendo enviados para o Dynatrace'],
    correct:[2]
  },
  {
    id:41, type:'multi', topic:'RUM',
    text:'Quais dos seguintes dados podem ser encontrados dentro de uma User Session?',
    options:['User Tags','Session and Action Properties','Server-side code level insights','JavaScript and Request errors','User Actions'],
    correct:[0,1,3,4]
  },
  {
    id:42, type:'single', topic:'RUM',
    text:'Qual é a melhor definição para a métrica "Visually Complete"?',
    options:['Quando o maior elemento da página é reportado como renderizado pelo navegador','O tempo que o primeiro elemento CSS leva para carregar','Um teste simulado executado no navegador do usuário para avaliar a velocidade de renderização','Quando todos os elementos visíveis ao usuário em uma página web estão 100% carregados e renderizados'],
    correct:[3]
  },
  {
    id:43, type:'single', topic:'Infra',
    text:'Selecione a capacidade do Dynatrace que fornece uma visualização de todas as dependências topológicas na minha infraestrutura, processos e serviços.',
    options:['Dynatrace Extension','Technologies and Processes classic','Smartscape','Services classic'],
    correct:[2]
  },
  {
    id:44, type:'single', topic:'Business Events',
    text:'Tenho diferentes segmentos de dados de Business Events, cada um com sua própria política de retenção de dados. Como posso configurar isso da melhor forma no Dynatrace?',
    options:['Log & Events viewer','Custom buckets','Account Management policies','Business Analytics apps','Dynatrace Support Ticket'],
    correct:[1]
  },
  {
    id:45, type:'single', topic:'Security',
    text:'O que o Dynatrace exibirá quando detectar que um componente vulnerável está acessível publicamente?',
    options:['A avaliação de risco exibirá a mensagem "public internet exposure"','O Dynatrace enviará um e-mail para os contatos de emergência informando que existe uma entidade explorável','O processo será marcado (tagged) para indicar que está vulnerável','O Dynatrace não consegue exibir essa informação'],
    correct:[0]
  },
  {
    id:46, type:'single', topic:'K8s',
    text:'Qual ferramenta eu usaria no meu cluster Kubernetes ou OpenShift para implantar e configurar os componentes do Dynatrace?',
    options:['Dynatrace OneAgent','Dynatrace Operator','Dynatrace CSI Driver','Prometheus'],
    correct:[1]
  },
  {
    id:47, type:'multi', topic:'K8s',
    text:'Quais dessas fontes de dados posso utilizar quando um cluster Kubernetes está sendo monitorado?',
    options:['Prometheus metrics','Infrastructure level metrics','OpenKit monitoring data','Code level insights','Kubernetes specific events and metrics'],
    correct:[0,1,3,4]
  },
  {
    id:48, type:'single', topic:'Extensions',
    text:'Tenho um dispositivo Smart IoT que não oferece suporte ao OneAgent nem ao Agentless RUM. O que eu poderia usar para rastrear User Sessions no Dynatrace?',
    options:['Dynatrace OpenKit','Dynatrace Extensions v2','Dynatrace WebAgent','Dynatrace ActiveGate'],
    correct:[1]
  },
  {
    id:49, type:'multi', topic:'K8s',
    text:'Quais etapas eu precisaria realizar para detectar automaticamente anomalias, como um evento de saturação de cpu-request em um nó, no meu ambiente Kubernetes?',
    options:['Enable Dynatrace RUM','Connect Dynatrace to the Kubernetes cluster API','Deploy OneAgent as a Docker container','In Dynatrace enable Kubernetes Anomaly detection'],
    correct:[1,3]
  },
  {
    id:50, type:'single', topic:'Security',
    text:'Qual ferramenta do Dynatrace é utilizada inicialmente para realizar o monitoramento de Application Security?',
    options:['OneAgent','AppSec Apps','ActiveGate','OpenTelemetry'],
    correct:[0]
  },
  {
    id:51, type:'multi', topic:'Dashboards',
    text:'Com que frequência os relatórios do Classic Dashboard são enviados?',
    options:['Weekly','Monthly','Daily','Bi-weekly'],
    correct:[0,1]
  },
  {
    id:52, type:'single', topic:'RUM',
    text:'Como você injetaria a tag JavaScript RUM ao usar uma implantação sem agente (agentless)?',
    options:['Inserir manualmente a tag JavaScript RUM em cada página HTML da aplicação','Utilizar a Dynatrace API para obter o número da versão mais recente do RUM agent','Instalar o Dynatrace OneAgent no banco de dados da aplicação','Desenvolver uma extensão Dynatrace ActiveGate para implantar o OneAgent'],
    correct:[0]
  },
  {
    id:53, type:'multi', topic:'Synthetic',
    text:'Que tipo de problemas os monitores Synthetic podem detectar?',
    options:['Availability','Resource','Application Security','Performance'],
    correct:[0,3]
  },
  {
    id:54, type:'multi', topic:'Tracing',
    text:'Quais são os benefícios de empregar distributed tracing?',
    options:['Tempo de entrega mais rápido (faster time to market)','Redução do MTTD e MTTR','Melhoria na conformidade com SLAs','Proteção do crescimento da lucratividade (bottom-line growth)','Improved internal collaboration','Session replay'],
    correct:[0,1,2,3,4]
  },
  {
    id:55, type:'single', topic:'Logs',
    text:'Qual é o período de retenção padrão para Logs?',
    options:['5 anos','10 dias','10 anos','35 dias'],
    correct:[3]
  },
  {
    id:56, type:'single', topic:'Alerts',
    text:'Qual dos seguintes é o tipo de limiar padrão usado para detecção de anomalias em Hosts (CPU saturation, memory saturation, disk utilization...)?',
    options:['Impact Analysis','Static Thresholds','Automated Multi-Dimensional Baselining','Integrations'],
    correct:[2]
  },
  {
    id:57, type:'single', topic:'Tracing',
    text:'Qual das seguintes opções descreve uma única operação dentro de um Trace?',
    options:['Span kind','Trace','Exporter','Context','Span'],
    correct:[4]
  },
  {
    id:58, type:'multi', topic:'Tracing',
    text:'Quais opções a Dynatrace oferece suporte para Tracing?',
    options:['Dynatrace RUM','Dynatrace OneAgent SDK','Dynatrace Operator','OpenTracing','OpenTelemetry'],
    correct:[1,2,4]
  },
  {
    id:59, type:'single', topic:'RUM',
    text:'Quais são as 3 classificações de User Actions para Behavior Analysis?',
    options:['Start Actions, Other Actions, Final Actions','Entry Actions, Other Actions, Exit Actions','Entry Actions, Middle Actions, Exit Actions','Initiation Action, Other Actions, Bounce Action'],
    correct:[1]
  },
  {
    id:60, type:'single', topic:'Security',
    text:'Como você inicia manualmente uma varredura de segurança no Dynatrace?',
    options:['Acessando a página "Security Overview"','Não é possível; o Dynatrace faz varredura a cada 2 horas','Enviando uma chamada de API para o Dynatrace','Não é possível; o Dynatrace sempre monitora as aplicações em tempo real, sem necessidade de varreduras'],
    correct:[3]
  },
  {
    id:61, type:'multi', topic:'Cloud',
    text:'Quais provedores de nuvem o Dynatrace oferece suporte nativo sem extensões?',
    options:['Google Cloud Platform (GCP)','Digital Ocean','Microsoft Azure','IBM Cloud','Amazon Web Services (AWS)'],
    correct:[0,2,4]
  },
  {
    id:62, type:'single', topic:'Synthetic',
    text:'Qual das opções a seguir é um pré-requisito para gravar os clickpaths do navegador?',
    options:['Extensão Dynatrace Synthetic Recorder','Execução sob demanda','Repetição da sessão RUM','Aplicativos Dynatrace'],
    correct:[0]
  },
  {
    id:63, type:'multi', topic:'Alerts',
    text:'Um problema foi aberto com a categoria de evento "Slowdown". Supondo configurações padrão de detecção de anomalias, quais tipos de entidade podem ser a causa raiz?',
    options:['Serviços','Aplicações','Processos','Provedores de nuvem','Hosts'],
    correct:[0,1,2,4]
  },
  {
    id:64, type:'single', topic:'Dashboards',
    text:'Quantos Threshold Values podem ser definidos no Data Explorer?',
    options:['1','3','5','7'],
    correct:[1]
  },
  {
    id:65, type:'single', topic:'Synthetic',
    text:'Qual dos seguintes Synthetics simula um HTTP Request para uma URL/Endpoint?',
    options:['HTTP monitor','Browser clickpaths','Ping test','Single-URL browser monitors'],
    correct:[0]
  },
  {
    id:66, type:'single', topic:'Cloud',
    text:'Qual capability fornece uma visão única de múltiplos recursos hyperscalers?',
    options:['Clouds App','Kubernetes App','Dynatrace Extensions v2','Dynatrace RUM'],
    correct:[0]
  },
  {
    id:67, type:'single', topic:'Infra',
    text:'Qual é o menor tempo de agregação para métricas recentes?',
    options:['10 segundos','30 segundos','1 minuto','5 minutos'],
    correct:[2]
  },
  {
    id:68, type:'multi', topic:'Alerts',
    text:'Que tipo de problemas podem aparecer no Dynatrace?',
    options:['Availability','Critical','Resource','Errors','Slowdown'],
    correct:[0,2,3,4]
  },
  {
    id:69, type:'multi', topic:'Infra',
    text:'Quais recursos devem ser usados para obter VISIBILIDADE TOTAL no desempenho de um banco de dados, incluindo análise de nível de código e dados métricos?',
    options:['Monitoramento RUM na aplicação que faz chamadas ao banco de dados','OneAgent nos servidores de aplicação que fazem chamadas para o banco de dados','Extensões para a tecnologia específica de banco de dados sendo monitorada','OneAgent no host do banco de dados em modo Full-Stack','OneAgent no host do banco de dados em modo Infrastructure Only'],
    correct:[0,1,2,3]
  },
  {
    id:70, type:'multi', topic:'Security',
    text:'Selecione os níveis de topologia que suportam a visualização de vulnerabilidades de terceiros.',
    options:['Service','Process','Application','Host','Data Center'],
    correct:[1,3]
  },
  {
    id:71, type:'multi', topic:'Infra',
    text:'Seu time tem que investigar o desempenho de um banco de dados. Supondo que todas as fontes de monitoramento estejam disponíveis, quais ferramentas você pode usar?',
    options:['Ao executar testes sintéticos contra o banco de dados','Por meio de painéis fornecidos por uma extensão de banco de dados','Examinando dados de serviço para um banco de dados específico','No aplicativo "Databases"'],
    correct:[1,2,3]
  },
  {
    id:72, type:'multi', topic:'Dashboards',
    text:'Quais Tiles de Dashboard visualizam o status das suas entidades usando Hexágonos Vermelhos e Verdes?',
    options:['Saúde do serviço','Saúde do monitor sintético','Saúde da aplicação','Aplicações web','Problemas'],
    correct:[0,1,2]
  },
  {
    id:73, type:'single', topic:'RUM',
    text:'Qual visualização fornece tempos detalhados W3C de páginas e recursos?',
    options:['Dynatrace Extensions v2','Waterfall analysis','Session Replay','Distributed Traces'],
    correct:[1]
  },
  {
    id:74, type:'multi', topic:'Business Events',
    text:'Como os dados de Business Events podem ser ingeridos no Dynatrace?',
    options:['Dynatrace API','OpenTelemetry','Web and mobile RUM','Logs','Dynatrace OneAgent'],
    correct:[0,2,3,4]
  },
  {
    id:75, type:'multi', topic:'Infra',
    text:'Quais componentes do Dynatrace são necessários para monitoramento completo do VMware vSphere?',
    options:['Dynatrace OneAgent','Dynatrace OneAgent SDK','Dynatrace ActiveGate','Synthetic Monitor','Dynatrace Operator'],
    correct:[0,2]
  },
  {
    id:76, type:'multi', topic:'Core',
    text:'Quais das seguintes capacidades estão disponíveis na plataforma Dynatrace?',
    options:['Infrastructure Observability','Business Events Monitoring','OpenSource','Application Observability','Application Security'],
    correct:[0,1,3,4]
  },
  {
    id:77, type:'multi', topic:'Core',
    text:'Cite os 3 pilares da observabilidade.',
    options:['Logs','Metrics','Dynatrace RUM','Automation','Traces'],
    correct:[0,1,4]
  },
  {
    id:78, type:'single', topic:'RUM',
    text:'Uma série de ações de usuário realizadas pelo mesmo usuário em um aplicativo é conhecida como o quê?',
    options:['Conversion Goal','Apdex rating','User session','USQL'],
    correct:[2]
  },
  {
    id:79, type:'single', topic:'Synthetic',
    text:'Qual dos seguintes é um pré-requisito para gravar Browser Clickpaths?',
    options:['Dynatrace Synthetic Recorder extension','On-demand execution','RUM Session Replay','Dynatrace Apps'],
    correct:[0]
  },
  {
    id:80, type:'single', topic:'RUM',
    text:'O que é "Session Replay"?',
    options:['Um recurso de monitoramento móvel que permite ver como era a tela de um usuário, incluindo notificações e tela inicial do dispositivo','Uma ferramenta de depuração específica que permite aos desenvolvedores reproduzir execuções de teste em suas workstations','Uma forma de capturar e reproduzir visualmente a experiência digital completa de cada usuário, semelhante a uma gravação de vídeo','Uma função de testes sintéticos para reproduzir localmente testes já gravados'],
    correct:[2]
  },
  {
    id:81, type:'single', topic:'Tracing',
    text:'Em Distributed Traces, como o trace-id é propagado em um ambiente?',
    options:['XML payload','HTTP header','JSON payload','TLS handshake'],
    correct:[1]
  },
  {
    id:82, type:'multi', topic:'Tracing',
    text:'Quais opções existem para enviar dados OpenTelemetry para o Dynatrace?',
    options:['Dynatrace ActiveGate API','Dynatrace RUM','Dynatrace OneAgent','Dynatrace Operator','Dynatrace SaaS API'],
    correct:[0,2,4]
  },
  {
    id:83, type:'single', topic:'RUM',
    text:'Quando o Session Replay está disponível para aplicativos mobile?',
    options:['Sempre','Nunca','Em mudanças de página','Em falhas (on crashes)'],
    correct:[3]
  },
  {
    id:84, type:'multi', topic:'Logs',
    text:'Quais das propriedades a seguir são adicionadas aos dados de registro ingeridos quando o enriquecimento de rastreamento para registros está ativado?',
    options:['dt.span_id','dt.trace_id','DT_RELEASE_VERSION','dt.security_context','dt.entity.process_group_instance'],
    correct:[0,1,4]
  },
  {
    id:85, type:'single', topic:'Logs',
    text:'Preciso realizar transformação de dados em logs durante a fase de ingestão. Qual funcionalidade fornece essa capacidade?',
    options:['Regras de detecção de serviços','Regras de monitoramento de processos personalizadas','Log Events','Regras de processamento de logs','Regras de detecção de anomalias'],
    correct:[3]
  },
  {
    id:86, type:'single', topic:'Logs',
    text:'Arquivos de log da minha aplicação podem conter mensagens com erros. Sempre que mensagens como essas ocorrerem, desejamos notificar as equipes de suporte para investigação. Qual funcionalidade do Dynatrace melhor atenderia a essa necessidade?',
    options:['Log Events','Log Metrics','Log Viewer','Regras de processamento de logs','Regras de detecção de anomalias'],
    correct:[0]
  },
  {
    id:87, type:'single', topic:'Logs',
    text:'Os arquivos de log do meu aplicativo podem conter mensagens com erros. Sempre que mensagens como essas ocorrerem, gostaríamos de notificar as equipes de suporte para investigar. Qual recurso do Dynatrace responderia melhor a essa pergunta?',
    options:['Log Events','Log Metrics','Log Viewer','Regras de processamento de logs','Regras de detecção de anomalias'],
    correct:[0]
  },
  {
    id:88, type:'single', topic:'Infra',
    text:'Qual é o período de retenção padrão para extensões de banco de dados em nível de código?',
    options:['5 anos','35 dias','10 dias','14 dias'],
    correct:[2]
  },
  {
    id:89, type:'single', topic:'Dashboards',
    text:'Quem pode visualizar os relatórios clássicos do painel?',
    options:['Proprietários do painel','Qualquer pessoa com um link','Administradores','Usuários logados no Dynatrace'],
    correct:[1]
  },
  {
    id:90, type:'single', topic:'Core',
    text:'O proprietário de um aplicativo quer garantir a qualidade dos lançamentos de software, validando KPIs em ambiente de teste antes de promover para produção, já tendo implantado o OneAgent. Qual opção atende melhor à solicitação?',
    options:['Assinar os relatórios do painel do Dynatrace','Extensão Dynatrace para importar métricas para o Dynatrace','Workflow acionado por chamada de API para executar um Site Reliability Guardian como parte do pipeline de CI/CD','Workflow executado com acionador de evento quando um problema é criado'],
    correct:[2]
  },
  {
    id:91, type:'multi', topic:'RUM',
    text:'Para qual das seguintes opções o Apdex é calculado?',
    options:['Ações do usuário','Erros','Metas de conversão','Aplicação','Tags de usuário'],
    correct:[0,3]
  }
];

// ── TOPIC CONFIG ─────────────────────────────────────────────
const TOPIC_COLOR = {
  'RUM':           '#1ab2ff',
  'Synthetic':     '#7c3aed',
  'Logs':          '#059669',
  'Business Events':'#d97706',
  'Security':      '#ef4444',
  'K8s':           '#0ea5e9',
  'Cloud':         '#6366f1',
  'Infra':         '#84cc16',
  'Tracing':       '#f59e0b',
  'Dashboards':    '#ec4899',
  'Extensions':    '#14b8a6',
  'Alerts':        '#f97316',
  'Core':          '#94a3b8'
};

// ── STATE ────────────────────────────────────────────────────
let questions = [];
let userAnswers = {};
let submitted = false;
let startTime = null;
let timerInterval = null;

// ── SHUFFLE ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── START ────────────────────────────────────────────────────
function startExam() {
  questions = shuffle(ALL_QUESTIONS).slice(0, 60);
  userAnswers = {};
  submitted = false;
  document.getElementById('intro-screen').classList.add('hidden');
  document.getElementById('exam-screen').classList.remove('hidden');
  document.getElementById('nav-bar').classList.remove('hidden');
  document.getElementById('hb-prog').classList.remove('hidden');
  document.getElementById('hb-timer').classList.remove('hidden');
  document.getElementById('hd-tot').textContent = questions.length;
  document.getElementById('nav-tot').textContent = questions.length;
  renderQuestions();

  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);

  window.scrollTo({ top: 0 });
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;
}

// ── RENDER ───────────────────────────────────────────────────
function renderQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';
  questions.forEach((q, idx) => {
    const isMulti = q.type === 'multi';
    const wrap = document.createElement('div');
    wrap.className = 'q-wrap';
    wrap.style.animationDelay = `${Math.min(idx * 20, 400)}ms`;

    const topicColor = TOPIC_COLOR[q.topic] || '#94a3b8';
    const opts = q.options.map((o, oi) => `
      <div class="option ${isMulti ? 'checkbox' : 'radio'}" data-qi="${idx}" data-oi="${oi}" onclick="toggleOption(${idx},${oi})">
        <div class="opt-indicator"><span class="opt-check">${isMulti ? '✓' : '●'}</span></div>
        <span class="opt-text">${o}</span>
      </div>
    `).join('');

    wrap.innerHTML = `
      <div class="q-block" id="qblock-${idx}">
        <div class="q-head">
          <span class="q-num">Q${String(idx + 1).padStart(2, '0')}</span>
          <span class="q-badge">${isMulti ? '☰ Múltipla resposta' : '◎ Única resposta'}</span>
          <span class="q-topic" style="color:${topicColor}">${q.topic}</span>
        </div>
        <div class="q-body">
          <div class="q-text">${q.text}</div>
          <div class="options">${opts}</div>
        </div>
        <div class="q-foot"><span class="q-feedback" id="fb-${idx}"></span></div>
      </div>
    `;
    container.appendChild(wrap);
  });
  updateStats();
}

// ── TOGGLE ───────────────────────────────────────────────────
function toggleOption(qi, oi) {
  if (submitted) return;
  const q = questions[qi];
  if (!userAnswers[qi]) userAnswers[qi] = [];

  if (q.type === 'single') {
    userAnswers[qi] = [oi];
    document.querySelectorAll(`[data-qi="${qi}"]`).forEach(el => el.classList.remove('selected'));
    document.querySelector(`[data-qi="${qi}"][data-oi="${oi}"]`).classList.add('selected');
  } else {
    const idx = userAnswers[qi].indexOf(oi);
    const el = document.querySelector(`[data-qi="${qi}"][data-oi="${oi}"]`);
    if (idx === -1) {
      userAnswers[qi].push(oi);
      el.classList.add('selected');
    } else {
      userAnswers[qi].splice(idx, 1);
      el.classList.remove('selected');
    }
  }
  updateStats();
  updateProgress();
}

// ── STATS ────────────────────────────────────────────────────
function updateStats() {
  const answered = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].length > 0).length;
  document.getElementById('hd-ans').textContent = answered;
  document.getElementById('nav-ans').textContent = answered;
}

function updateProgress() {
  const answered = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].length > 0).length;
  document.getElementById('progress-bar').style.width = (answered / questions.length * 100) + '%';
}

// ── SUBMIT ───────────────────────────────────────────────────
function submitExam() {
  const answered = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].length > 0).length;
  if (answered < questions.length * 0.5) {
    if (!confirm(`Você respondeu apenas ${answered} de ${questions.length} questões. Deseja finalizar mesmo assim?`)) return;
  }

  submitted = true;
  clearInterval(timerInterval);

  let totalScore = 0;
  let perfect = 0, partial = 0, wrongCount = 0;

  // Per-topic tracking
  const topicData = {};

  questions.forEach((q, qi) => {
    const userAns = userAnswers[qi] || [];
    const correct = q.correct;
    let score = 0;

    if (q.type === 'single') {
      score = (userAns.length === 1 && userAns[0] === correct[0]) ? 1 : 0;
    } else {
      const totalCorrect = correct.length;
      const hits = userAns.filter(a => correct.includes(a)).length;
      const mistakes = userAns.filter(a => !correct.includes(a)).length;
      score = Math.max(0, (hits - mistakes) / totalCorrect);
    }

    totalScore += score;

    if (score === 1) perfect++;
    else if (score > 0) partial++;
    else wrongCount++;

    // Topic accumulation
    const t = q.topic;
    if (!topicData[t]) topicData[t] = { score: 0, total: 0 };
    topicData[t].score += score;
    topicData[t].total += 1;

    // Visual feedback per option
    q.options.forEach((_, oi) => {
      const el = document.querySelector(`[data-qi="${qi}"][data-oi="${oi}"]`);
      if (!el) return;
      el.classList.remove('selected');
      el.classList.add('disabled');
      const isCorrect = correct.includes(oi);
      const userPicked = userAns.includes(oi);
      if (isCorrect && userPicked) el.classList.add('correct');
      else if (!isCorrect && userPicked) el.classList.add('wrong');
      else if (isCorrect && !userPicked) el.classList.add('missed');
    });

    // Block border
    const block = document.getElementById(`qblock-${qi}`);
    if (score === 1) block.classList.add('correct-block');
    else if (score > 0) block.classList.add('partial-block');
    else block.classList.add('wrong-block');

    // Inline feedback
    const fb = document.getElementById(`fb-${qi}`);
    if (score === 1) { fb.className = 'q-feedback ok'; fb.textContent = '✓ Correto'; }
    else if (score > 0) { fb.className = 'q-feedback partial'; fb.textContent = `⚡ Parcial — ${Math.round(score * 100)}%`; }
    else { fb.className = 'q-feedback nok'; fb.textContent = '✗ Incorreto'; }
  });

  const pct = (totalScore / questions.length * 100).toFixed(1);
  const passed = parseFloat(pct) >= 80;

  // Render result
  const resultDiv = document.getElementById('result-screen');
  resultDiv.classList.remove('hidden');

  const deg = Math.round(parseFloat(pct) / 100 * 360);
  const ringColor = passed ? 'var(--correct)' : parseFloat(pct) >= 60 ? 'var(--partial)' : 'var(--wrong)';

  resultDiv.innerHTML = `
    <div class="intro-eyebrow" style="margin-bottom:16px">${passed ? '🎉 APROVADO' : parseFloat(pct) >= 60 ? '📚 QUASE LÁ' : '🔁 CONTINUE ESTUDANDO'}</div>
    <div class="result-title">Sua pontuação: <span class="hl">${pct}%</span></div>
    <p style="color:var(--muted);font-size:13px;margin-top:6px">Mínimo para aprovação: <strong style="color:var(--text)">80%</strong></p>
    <div class="score-ring-wrap">
      <div class="score-ring" style="background: conic-gradient(${ringColor} ${deg}deg, var(--surface3) ${deg}deg)">
        <div class="score-ring-inner">
          <span class="score-pct" style="color:${ringColor}">${pct}%</span>
          <span class="score-label">score</span>
        </div>
      </div>
    </div>
    <div class="result-badges">
      <div class="rb ok"><span class="rv">${perfect}</span><span class="rl">Acertos totais</span></div>
      <div class="rb partial"><span class="rv">${partial}</span><span class="rl">Parciais</span></div>
      <div class="rb nok"><span class="rv">${wrongCount}</span><span class="rl">Erros</span></div>
    </div>
    <button class="btn" onclick="restartExam()" style="margin-top:8px">↺ Novo Simulado</button>
  `;

  // Topic breakdown
  const topicSection = document.getElementById('topic-section');
  topicSection.classList.remove('hidden');
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';

  const sorted = Object.entries(topicData).sort((a, b) => (b[1].score / b[1].total) - (a[1].score / a[1].total));

  sorted.forEach(([topic, data]) => {
    const pctTopic = data.total > 0 ? (data.score / data.total * 100) : 0;
    const color = TOPIC_COLOR[topic] || '#94a3b8';
    const barPct = pctTopic.toFixed(0);

    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="topic-name" style="color:${color}">${topic}</div>
      <div class="topic-bar-bg">
        <div class="topic-bar-fill" style="width:0%;background:${color}" data-pct="${barPct}"></div>
      </div>
      <div class="topic-stats">
        <span>${data.total} questão${data.total > 1 ? 'es' : ''}</span>
        <span class="tpct" style="color:${color}">${barPct}%</span>
      </div>
    `;
    grid.appendChild(card);
  });

  // Animate bars after paint
  setTimeout(() => {
    grid.querySelectorAll('.topic-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);

  // Show divider
  document.getElementById('answer-divider').classList.remove('hidden');

  // Hide submit button, show restart in nav
  document.getElementById('submit-btn').style.display = 'none';

  // Update progress to 100%
  document.getElementById('progress-bar').style.width = '100%';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartExam() {
  clearInterval(timerInterval);
  document.getElementById('exam-screen').classList.add('hidden');
  document.getElementById('nav-bar').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('topic-section').classList.add('hidden');
  document.getElementById('answer-divider').classList.add('hidden');
  document.getElementById('submit-btn').style.display = '';
  document.getElementById('hb-prog').classList.add('hidden');
  document.getElementById('hb-timer').classList.add('hidden');
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('intro-screen').classList.remove('hidden');
}

// ── SCROLL ───────────────────────────────────────────────────
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top');
  btn.classList.toggle('visible', window.scrollY > 400);
});
