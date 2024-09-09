const faturamentoJson = `{
    "01": 500.00,
    "02": 300.00,
    "03": 0.00,
    "04": 0.00,
    "05": 450.00,
    "06": 0.00,
    "07": 0.00,
    "08": 200.00,
    "09": 300.00,
    "10": 0.00,
    "11": 0.00,
    "12": 350.00,
    "13": 0.00,
    "14": 0.00,
    "15": 400.00,
    "16": 0.00,
    "17": 0.00,
    "18": 500.00,
    "19": 0.00,
    "20": 0.00,
    "21": 0.00,
    "22": 250.00,
    "23": 0.00,
    "24": 0.00,
    "25": 300.00,
    "26": 0.00,
    "27": 350.00,
    "28": 0.00,
    "29": 0.00,
    "30": 450.00,
    "31": 0.00
}`;

const faturamento = JSON.parse(faturamentoJson);

const valores = Object.values(faturamento).filter((v) => v > 0);
const total = valores.reduce((a, b) => a + b, 0);
const media = total / valores.length;

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

const diasAcimaDaMedia = valores.filter((v) => v > media).length;

console.log(`Menor valor: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor: R$${maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
