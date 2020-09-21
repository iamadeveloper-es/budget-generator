let c, dateInpt, companyNameInpt, cIFInpt, addressInpt, conceptInpt, baseInpt, iRPFInpt, iVAInpt, budgetNodo, createBudgetBtn, budgetObj, budgetsArray, dateOutput, companyNameOutput, cIFOutput, addressOutput, conceptOutput, baseOutput, iRPFOutput, iVAOutput, totalOutput
let percent, eur;
c = console.log;
companyNameInpt = document.querySelector('#company-name');
dateInpt = document.querySelector('#date');
cIFInpt = document.querySelector('#cif');
addressInpt = document.querySelector('#adress');
conceptInpt = document.querySelector('#concept');
baseInpt = document.querySelector('#base');
iRPFInpt = document.querySelector('#irpf');
iVAInpt = document.querySelector('#iva');
createBudgetBtn = document.querySelector('#crear');
dateOutput = document.querySelector('.budget__fecha');
companyNameOutput = document.querySelector('.budget__company-name');
cIFOutput = document.querySelector('.budget__cif');
addressOutput = document.querySelector('.budget__address');
conceptOutput = document.querySelector('.budget__concept');
baseOutput = document.querySelector('.budget__base');
iRPFOutput = document.querySelector('.budget__irpf');
iVAOutput = document.querySelector('.budget__iva');
totalOutput = document.querySelector('.budget__total');
budgetNodo  = document.querySelector('#budget');
budgetsArray = [];
percent = '%'
eur = '€'

createBudgetBtn.addEventListener("click", submit);



function getInptValue(inpt){
    return inpt.value
};

function generateBudget(){
    budgetObj = {
        date: getDate(),
        CompanyName: getInptValue(companyNameInpt),
        cif: getInptValue(cIFInpt),
        address: getInptValue(addressInpt),
        concept: getInptValue(conceptInpt),
        baseImp: Number(getInptValue(baseInpt)),
        irpf: Number(getInptValue(iRPFInpt)),
        iva: Number(getInptValue(iVAInpt)),
        total: ''
    };
    budgetsArray.push(budgetObj);
    c(budgetsArray);
}

function calcTotal(base){
    let totalIva = (base * 21) / 100;
    let totalIRPF = (base * 7) / 100;
    let total = (base + totalIva) - totalIRPF
    return total;
};

function printBudget(budget){
    budget = JSON.stringify(budget);
    dateOutput.innerHTML = budgetObj.date;
    companyNameOutput.innerHTML = budgetObj.CompanyName;
    cIFOutput.innerHTML = budgetObj.cif;
    addressOutput.innerHTML = budgetObj.address;
    conceptOutput.innerHTML = budgetObj.concept;
    baseOutput.innerHTML = budgetObj.baseImp + eur;
    iRPFOutput.innerHTML = budgetObj.irpf + percent;
    iVAOutput.innerHTML = budgetObj.iva + percent;;
    totalOutput.innerHTML = calcTotal(budgetObj.baseImp) + eur;
    

}


function submit(evt){
    evt.preventDefault();
    budgetNodo.classList.add('section__budget');
    budgetNodo.classList.remove('hide');
    generateBudget()
    printBudget(budgetObj)
}