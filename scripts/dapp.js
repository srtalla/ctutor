console.log("hi")

const ssAddress = '0xB31F1c44Dcb6C74E532160199A8A09758f09dC1b'
const ssABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "tutor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isAvail",
                "type": "bool"
            }
        ],
        "name": "LogAvailabilityChange",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tutorId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "LogDeleteBooking",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tutor",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "hourlyrate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "LogTutorAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tutor",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "LogTutorBooked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bookings",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "idList",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "idListLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tutors",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tutorId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "hourlyRate",
                "type": "uint256"
            },
            {
                "internalType": "enum Tutors.Status",
                "name": "status",
                "type": "uint8"
            },
            {
                "internalType": "address payable",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "subject",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imgUrl",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tutorsByAddress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tutorsRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getTutors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "tutorId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hourlyRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Tutors.Status",
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address payable",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "subject",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgUrl",
                        "type": "string"
                    }
                ],
                "internalType": "struct Tutors.Tutor[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_hourlyRate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_imgUrl",
                "type": "string"
            }
        ],
        "name": "registerTutor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tutorId",
                "type": "uint256"
            }
        ],
        "name": "bookTutor",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [],
        "name": "availableTutorIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "isAvail",
                "type": "bool"
            }
        ],
        "name": "setAvailability",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSignups",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tutorId",
                "type": "uint256"
            }
        ],
        "name": "deleteBooking",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
var tutormap;
const statustext = ['Available', 'Booked', 'Not Available'];

async function asyncLoadTutors(table_id, dropdown_id, selected_ids = []) {

    ssTutorTable = document.getElementById(table_id);

    var web3 = new Web3(window.ethereum)

    // instantiate smart contract instance

    const myContract = new web3.eth.Contract(ssABI, ssAddress)
    myContract.setProvider(window.ethereum)

    var tutors = await myContract.methods.getTutors().call()

    tutormap = {}

    var available_tids = []
    var tableData = []
    for (let i = 0; i < tutors.length; i++) {
        tutormap[tutors[i].tutorId] = tutors[i];
        if (selected_ids.length > 0
            && !selected_ids.includes(tutors[i].tutorId)) {
            continue;
        }
        tableData.push(
            {
                tutorId: tutors[i].tutorId,
                name: tutors[i].name,
                subject: tutors[i].subject,
                description: tutors[i].description,
                hourlyRate: tutors[i].hourlyRate,
                status: statustext[tutors[i].status],
                imgUrl: tutors[i].imgUrl,
            }
        );

        if (tutors[i].status === '0') {
            available_tids.push(tutors[i].tutorId)
        }
    }

    if (selected_ids.length > 0) {
        colInfo = [
            { title: "Id", field: "tutorId" },
            { title: "Name", field: "name" },
            { title: "Subject", field: "subject" },
            { title: "Rate", field: "hourlyRate" },
        ]
    } else {
        colInfo = [
            { title: "Id", field: "tutorId" },
            { title: "Name", field: "name" },
            { title: "Subject", field: "subject" },
            { title: "Description", field: "description" },
            { title: "Rate", field: "hourlyRate" },
            { title: "Availability", field: "status" },
            { title: "Image", field: "imgUrl" }
        ]
    }
    var table = new Tabulator("#" + table_id, {
        layout: "fitDataTable",
        data: tableData, //set initial table data
        columns: colInfo,
    });

    if (selected_ids.length > 0) {
        available_tids = selected_ids;
    }
    addTutorDropdown(tutormap, dropdown_id, selected_ids = available_tids);
    return tutormap;
}

const loadTutors = (table_id, dropdown_id, selected_ids = []) => {
    const result = asyncLoadTutors(table_id, dropdown_id, selected_ids)
    return result
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

function addTutorDropdown(tutormap, elementid, selected_ids = []) {
    var select = document.getElementById(elementid);
    removeOptions(select);
    for (var i in tutormap) {
        if (selected_ids.length > 0) {
            if (!selected_ids.includes(i)) {
                continue;
            }
        } else if (tutors[i].status !== '0') {
            continue;
        }

        var option = document.createElement('option');
        option.text = tutormap[i].name + ' ( ' + tutormap[i].subject + ' ) ';
        option.value = i;
        select.add(option, 0);
    }

}

function getTuturRows(tutormap) {

    var code = '';
    var closeddiv = true;
    var j = 0;
    for (var i in tutormap) {
        tname = tutormap[i].name;
        tsubj = tutormap[i].subject;
        tavail = 'Available? &#x274C;';
        if (tutormap[i].status === '0') {
            tavail = 'Available? &#x2705;';
        }
        trate = tutormap[i].hourlyRate;
        // tinfo = `<div class="tinfo">${tname}<br/>${tsubj} (${trate}/hr)<br/>${tavail}</div>`;
        tinfo = `<div class="tinfo">${tname} ${tavail}</div>`;
        // console.log('T_', i, tname, tsubj, tavail, trate);

        if (j % 4 === 0) {
            if (!closeddiv) {
                code += '</div>\n';
            }
            code += '<div class="row">';
            closeddiv = false;
        }
        j++;
        tdisplay = '<div class="column"><img src="images/p' + j + '.png" tutorid=' + i + ' alt="' + i + '" style="width:120px" onclick="tutorDetails(this);">' + tinfo + '</div>';
        code += tdisplay;
        console.log(tdisplay)
    }
    if (!closeddiv) {
        code += '</div>\n';
    }
    return code;
}

function tutorDetails(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var imgInfo = document.getElementById("imginfo");
    var id = imgs.alt;
    tname = tutormap[id].name;
    tsubj = tutormap[id].subject;
    tavail = 'Available? &#x274C;';
    if (tutormap[id].status === '0') {
        tavail = 'Available? &#x2705;';
    }
    trate = tutormap[id].hourlyRate;
    tinfo = `<div>Name: ${tname}<br/>Subject: ${tsubj} <br/>Rate: ${trate}/hr<br/>${tavail}</div>`;


    expandImg.src = imgs.src;
    imgInfo.innerHTML = tinfo;
    expandImg.parentElement.style.display = "block";
}

// ----------------------------------------------
//     DETECT METAMASK  
// ----------------------------------------------

window.addEventListener('load', function () {
    if (typeof window.ethereum !== 'undefined') {
        let mmDetected = this.document.getElementById('mm-detected');
        mmDetected.innerHTML = 'Metamask Detected';
    } else {
        console.log('Metamask not installed');
        this.alert('You need Metamask installed!');
    }
})

// ----------------------------------------------
//     CONNECT WITH METAMASK  
// ----------------------------------------------

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
    const mmCurrentAccount = document.getElementById('mm-current-account');

    mmCurrentAccount.innerHTML = 'MetaMask Account: ' + ethereum.selectedAddress;

    (async () => {
        console.log(await loadTutors('ss-tutor-table', 'ss-tid'))
    })();


}

// ----------------------------------------------
//     BOOK A SESSION WITH A TUTOR   
// ----------------------------------------------
const ssListTutors = document.getElementById('ss-list-button');
ssListTutors.onclick = async () => {

    ssTutorDisplay = document.getElementById('ss-tutor-display');
    ssTutorDisplay.innerHTML = getTuturRows(tutormap);

}

const ssBook = document.getElementById('ss-book-button');

ssBook.onclick = async () => {
    // grab value from input

    const ssInputValue = document.getElementById('ss-tid').value;

    var web3 = new Web3(window.ethereum)

    if (!(ssInputValue in tutormap)) {
        alert('Missing tutor : ', ssInputValue);
        return;
    }
    // console.log("Tutor rate: ", tutormap[ssInputValue].hourlyRate)

    const myContract = new web3.eth.Contract(ssABI, ssAddress)
    myContract.setProvider(window.ethereum)

    await myContract.methods.bookTutor(ssInputValue).send({ from: ethereum.selectedAddress, value: tutormap[ssInputValue].hourlyRate });

    (async () => {
        console.log(await loadTutors('ss-tutor-table', 'ss-tid', []))
    })();
}

// ----------------------------------------------
//     MY TUTOR BOOKINGS  
// ----------------------------------------------
const ssBookedTutors = document.getElementById('ss-booked-tutors')

ssBookedTutors.onclick = async () => {

    var web3 = new Web3(window.ethereum)

    const myContract = new web3.eth.Contract(ssABI, ssAddress)
    myContract.setProvider(window.ethereum)

    var tutorids = await myContract.methods.getSignups().call();

    (async () => {
        console.log(await loadTutors('ss-mytutor-table', "ss-close-tutor", selected_ids = tutorids))
    })();

}


// ----------------------------------------------
//     REGISTER TUTOR 
// ----------------------------------------------
const ssRegister = document.getElementById('ss-register-tutor')

ssRegister.onclick = async () => {

    tname = document.getElementById("r-name").value;
    subject = document.getElementById("r-subject").value;
    descr = document.getElementById("r-description").value;
    imgURL = document.getElementById("r-imgURL").value;
    rate = document.getElementById("r-rate").value;
    taddr = document.getElementById("r-address").value;

    // console.log(tname, subject, descr, imgURL, rate, taddr)

    var web3 = new Web3(window.ethereum)

    const myContract = new web3.eth.Contract(ssABI, ssAddress)
    myContract.setProvider(window.ethereum)

    await myContract.methods.registerTutor(
        tname,
        taddr,
        rate,
        subject,
        descr,
        imgURL
    ).send({ from: ethereum.selectedAddress });

    (async () => {
        console.log(await loadTutors('ss-tutor-table', 'ss-tid', []))
    })()
}


// ----------------------------------------------
//     MARK SESSION WITH TUTOR AS COMPLETED
// ----------------------------------------------
const ssSignoffButton = document.getElementById('ss-signoff-button')

ssSignoffButton.onclick = async () => {

    const ssInputValue = document.getElementById('ss-close-tutor').value;
    // console.log('SIGNOFF: ', ssInputValue, tutormap[ssInputValue].name);

    var web3 = new Web3(window.ethereum)

    const myContract = new web3.eth.Contract(ssABI, ssAddress)
    myContract.setProvider(window.ethereum)

    await myContract.methods.deleteBooking(ssInputValue).send(
        { from: ethereum.selectedAddress }
    );

    var tutorids = await myContract.methods.getSignups().call();

    (async () => {
        console.log(await loadTutors('ss-mytutor-table', "ss-close-tutor", selected_ids = tutorids))
    })()

}



// [
//     '0x86c24C4d5540519Db65b920E0e288D89C2445866',
//     '0x546b806a4417d0b983cc42A374B16c036A13f767',
//     '0xb83052EDaf6c3CbBa46a768d968a41008AEdB5B1',
//     '0xF6C59947BABE5ac425CfC8c86e3CAe0930BD88a7',
//     '0x2A029899Bb95Aa656459097ABD6757225A15d8E5',
//     '0x04F1e69fc8a27dD833c4Eab47Cc857154B893023',
//     '0x29B04eAE1b6141C2a1Ea1187D8618C34bAFEB892',
//     '0x8B27e36Fe6d5b45Cfbb9F30063A0c8e1b79F91E2',
//     '0x0C77c54B683aB6A8E078582fd3B9FefE218ECeae',
//     '0xDf051780b31d11B2d3f90aac60A3958Ce0B8D102'
//   ]