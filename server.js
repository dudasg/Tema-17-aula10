// Servidor Express - Projeto #17: Imobiliária & Gestão de Aluguéis
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3017;

app.get('/api/imobiliaria/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 17,
        sistema: "Imobiliária & Gestão de Aluguéis",
        categoria: "Mercado Imobiliário",
        tabela_conectada: process.env.TABELA_ALVO || "imoveis_contratos",
        parametro_ambiente: process.env.REGIONAL_CRECI || "IMOB_PRIME_17",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #17] Imobiliária & Gestão de Aluguéis rodando em http://localhost:${PORT}/api/imobiliaria/status`);
});