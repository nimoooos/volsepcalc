let mbp = 0; //monthly base pay
let yoas = 0; //years of active service
let basepay = 0; //base pay as calculated

const mbpInput  = document.getElementById('mbp');
const yoasInput = document.getElementById('yoas');
const ivspInput = document.getElementById('ivsp');
const vspInput  = document.getElementById('vsp');

const paygradeInput = document.getElementById('paygrade')
const yoas2Input    = document.getElementById('yoas2');
const basepayInput  = document.getElementById('basepay');

let payTable = {
    "E9": {
      "10": 6657.30,
      "12": 6807.90,
      "14": 6997.80,
      "16": 7221.60
    },
    "E8": {
      "8": 5449.50,
      "10": 5690.70,
      "12": 5839.80,
      "14": 6018.60,
      "16": 6212.10
    },
    "E7": {
      "0": 3788.10,
      "2": 4134.30,
      "3": 4293.00,
      "4": 4502.10,
      "6": 4666.50,
      "8": 4947.60,
      "10": 5106.30,
      "12": 5387.10,
      "14": 5621.40,
      "16": 5781.30
    },
    "E6": {
      "0": 3276.60,
      "2": 3606.00,
      "3": 3765.00,
      "4": 3919.80,
      "6": 4080.60,
      "8": 4443.90,
      "10": 4585.20,
      "12": 4858.80,
      "14": 4942.50,
      "16": 5003.40
    },
    "E5": {
      "0": 3001.50,
      "2": 3203.70,
      "3": 3358.80,
      "4": 3517.20,
      "6": 3763.80,
      "8": 4021.80,
      "10": 4234.50,
      "12": 4259.70,
      "14": 4259.70,
      "16": 4259.70
    },
    "E4": {
      "0": 2752.20,
      "2": 2892.90,
      "3": 3049.80,
      "4": 3204.30,
      "6": 3341.40,
      "8": 3341.40,
      "10": 3341.40,
      "12": 3341.40,
      "14": 3341.40,
      "16": 3341.40
    },
    "E3": {
      "0": 2484.60,
      "2": 2640.60,
      "3": 2800.80,
      "4": 2800.80,
      "6": 2800.80,
      "8": 2800.80,
      "10": 2800.80,
      "12": 2800.80,
      "14": 2800.80,
      "16": 2800.80
    },
    "E2": {
      "0": 2362.80,
      "2": 2362.80,
      "3": 2362.80,
      "4": 2362.80,
      "6": 2362.80,
      "8": 2362.80,
      "10": 2362.80,
      "12": 2362.80,
      "14": 2362.80,
      "16": 2362.80
    },
    "E1": {
      "0": 2108.10,
      "2": 2108.10,
      "3": 2108.10,
      "4": 2108.10,
      "6": 2108.10,
      "8": 2108.10,
      "10": 2108.10,
      "12": 2108.10,
      "14": 2108.10,
      "16": 2108.10
    },
    "O8": {
      "0": 13380.00,
      "2": 13818.90,
      "3": 14109.30,
      "4": 14190.30,
      "6": 14553.60,
      "8": 15159.30,
      "10": 15300.60,
      "12": 15876.30,
      "14": 16042.20,
      "16": 16538.10
    },
    "O7": {
      "0": 11117.70,
      "2": 11634.00,
      "3": 11873.10,
      "4": 12063.60,
      "6": 12407.10,
      "8": 12747.30,
      "10": 13140.00,
      "12": 13531.50,
      "14": 13925.10,
      "16": 15159.30
    },
    "O6": {
      "0": 8430.90,
      "2": 9261.90,
      "3": 9870.00,
      "4": 9870.00,
      "6": 9907.80,
      "8": 10332.30,
      "10": 10388.70,
      "12": 10388.70,
      "14": 10979.10,
      "16": 12022.80
    },
    "O5": {
      "0": 7028.40,
      "2": 7917.30,
      "3": 8465.40,
      "4": 8568.60,
      "6": 8910.90,
      "8": 9114.90,
      "10": 9564.90,
      "12": 9895.80,
      "14": 10322.70,
      "16": 10974.30
    },
    "O4": {
      "0": 6064.20,
      "2": 7019.70,
      "3": 7488.90,
      "4": 7592.40,
      "6": 8027.10,
      "8": 8493.60,
      "10": 9075.00,
      "12": 9526.20,
      "14": 9840.60,
      "16": 10020.90
    },
    "O3": {
      "0": 5331.60,
      "2": 6044.10,
      "3": 6522.60,
      "4": 7112.40,
      "6": 7453.80,
      "8": 7827.90,
      "10": 8069.10,
      "12": 8466.60,
      "14": 8674.50,
      "16": 8674.50
    },
    "O2": {
      "0": 4606.80,
      "2": 5246.70,
      "3": 6042.90,
      "4": 6247.20,
      "6": 6375.30,
      "8": 6375.30,
      "10": 6375.30,
      "12": 6375.30,
      "14": 6375.30,
      "16": 6375.30
    },
    "O1": {
      "0": 3998.40,
      "2": 4161.90,
      "3": 5031.30,
      "4": 5031.30,
      "6": 5031.30,
      "8": 5031.30,
      "10": 5031.30,
      "12": 5031.30,
      "14": 5031.30,
      "16": 5031.30
    }
  }


mbpInput.addEventListener('change',computeIvsp);
yoasInput.addEventListener('change',()=>{
    computeIvsp();
    yoas2Input.value=yoas;
    computeBasepay();
});

paygradeInput.addEventListener('change',computeBasepay);
yoas2Input.addEventListener('change',()=>{
    computeBasepay();
    yoasInput.value=yoas2Input.value;
    computeIvsp();
})


function computeIvsp() {
    let ivsp=0;
    mbp = mbpInput.value;
    yoas = yoasInput.value;

    if (yoas<=5 || yoas>20) {
        ivspInput.value="Not Eligible";
        vspInput.value="Not Eligible";
    }
    else {
        ivsp = mbp*12*yoas*0.1
        ivspInput.value=ivsp;
        vspInput.value=2*ivsp;
    }
}


function computeBasepay() {
    let basepay=0;
    let breakpoints = [0,2,3,4,6,8,10,12,14,16]; //years of service breakpoints
    let years = yoas2Input.value;
    let yearCategory = 0;
    breakpoints.forEach(x => {
        if(x<=years){yearCategory=x;}
    });

    console.log(years, yearCategory, payTable[paygradeInput.value][yearCategory]);
    basepayInput.value = payTable[paygradeInput.value][yearCategory];
}


function importBasePay() {
    mbpInput.value = basepayInput.value;
    computeIvsp();
}