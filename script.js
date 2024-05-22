// JSON data
var clubData = {
    "name": "FC Barcelona",
    "year": 1899,
    "coach": "Xavi Hernandez",
    "stadium": "Spotify Camp Nou Stadium",
    "crest": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABvFBMVEUATpntvADcADClAET///8AAAD/7QMAAAQAAAaoAEH/8wAAAAIEAADxvwCmgwAAKGT85gADTZt2JGbbADPdASzskSHlZiV7ImHqgyHvmiBjAC392wSLFlSPElHiVmvbACn99/jaAB3uprCfkgDyucGTlJusAD9HPH+gmgBgSgGFACOuhwCrjACjhwD3xAB9AB7WqgDFmgV5ZgD/+ABqVQMAAB0AGC8AACwAADQAADl7ADMGK1UDEyQHRocDPXdcTQjqvwAAEgBpABwES48ADRngsQTNowQwJAO4kgCcfgYAE0snIQQBJUgAN3sAABkAO4COcQAFMV4WFAVyWgY9NwgFNGgIGDsGJkkEJVIFHDgAFytJPAVMSgU8PAc9LwEUEQcfAAtPABdNPAOlABu3AC0xABEMIQC4tQQaIAhARAAnMAlXIjyWbgBXQgaQSRnUywllZQZGTFkvNUceHSgtHABuUACAg4qusLTe5OaKdwZkPxDHADCtRSPKy80hDACRAB/e1AVbZG1uaAyCggbfP1mEKEU3ABKtqAZEKgWGanR5ABGTkgSJVRGHOhZSADlEAEWMADkqAB5KACMqIWBPblKpAAAWdElEQVR4nO2djV8bN5rHPUkUCUayo8Lutdndu+71sltio9jGIS/GL4mZwcYhGIxLgNSkXLqhOdj0JW3D7TXtbfe22fauS7v/8D2SZvwOHpNgZpL8+mkL9oyNvn706NEj6XEo9Fqv9ZKJN/4z0B2vqHgozQcEkM7wV5MYz1JKMt7bzkOZWYqWjvEv8qnAogprCERXPd4AUNNU3jGTDb1i1sVly6kpadGat7ZniWIFd0xnXyZY/drCM6uUYpMsV4iJMZ3JHo6Lyy47QzE28cQ2gRvQelY9eND1PBQc48umC4e0g4dq62AjBJOqIew5QsBY1g+3FZ5dh4swwpPCqBITDJIScPUH0OIFznl2KRi0CoBiPZLp/WSmtkYpMjEiK7Yw8gYrEQStp2TpIEPhoSXZAU1EUhYzgO+KvEO+SDp7wD3ZNPTu7AtqznGKh2Yc13JrKauJcaVCJpuWoOAZk5CVojCk8sxKEWKCedG1mjLIZvulGRZq78EdcAOScJVEcQP6oqneYz2dzRS4I7ilkKmtOu9PTqb9gymNHFH5z+2Z6em16emZWbAOCo5KPmHilM2YbjkYl7BzBB7H8PTMnZpsuxotpRXegYbLewjeKDbuMBizoTPq95D0yez69Nra2vS6vFq+vn7u1kmT6CsInqBPJcvw2ROs2TjCYA0AxSS5aF40Gq4bH09KWzE1YDIzs74OdDUMeBnogE24jnXlYykYGxAGkyMtb4JMuF9+Ghtwb833Ib9ktSeYXbkLI50kBB3GNCUoEzrT3b2E0WJUTWMxYndxW6t10+X975esluvyDcJGAt5DssTy5aXgF/kelYQhLEIoPcBv+kbrwCcnnQsDYMVKMlcvL28ul+e2UslSMS5aTQoMKuaCA24sX6zOmR2wytWYJVpQ7SVYvuUVhLAS4Up1oj5XLs/Vc9VKOBEX6jVZEdDPnDSNQwQ+Nk0JKTdpQGsagt9auxKgSt374H01JDYeEpYt2761sbE1AS23LdFyD2OTNy69vxtvWlfXmzTfIs+gZ9P0SSM5ROCwoNvEjb6CRiXu3vv3sVP3P8y14mptfDtbsKrwH26OjZ19sD0Rb3d5B71HHRPq51hfDk0x0ZeUiO/94YP742OnQPc//CjB+jUeTK5y4+bY+Kmxc6OjDx7Wiw7J/GE3WTBi0sJJIzlYMzA8lZhrCr04gdnYew/vXYSGOxq//x9oxzrMWBgr7t74o7pj7NzZs6NTj26iVNEQhzNmNsCa8e+AyDMwcJO4aoMdsy3pgZWv0n2LGfFoZcv84Os/ndJWJTU2/tt/PXNhrQ5DHutuPdxnFFPk40dTb6k7JCzANT52/yZ5WA0n1Fsw1voeDS1jRP2c/uJLMIRt6D8YffLpZ4+f7U5Udyo7OzvJz3eflT/75Isvn/zbb0+1C2CdOfPkwqflajRutDXdsIp7H5H/fHB29OzoL9pgSYv803/98PHD7bmN3J+Tlb29ZLL6+e4WDIuort6fVQlEWv5FJQVBtKk6Igt/cebM20+efPWl1ldPnrx9Rqo3LNDbX33xyebTrWplJxwNlyDqeLz94U2wwjenJJ8uWKdO/XJqFJ566/79+19//fW7Dx48ePTNN+dGt23dCZG/Q4eQnPFTCA2VZQn65EwvHQhLEwO6Fy58cved76DpY6cklTdHe8Ma+6Wi6PTPX42Oquu+m1ADDFsxMT0w+eEXLVGCqzos/O8jwNK68O4UtH1UO7Z+sLTr+9VZpdEblrZrYOX7LA3nBGipUIs97WlanmC9IwGdHRzW6IMJ7bGAFeGDLocMXzUItlLC9VrDhvW+9lglNY/2vzj4eCd8QG8PGdboo7r2WMvg3f1uVSGZicpS06zKv1kkvxwyrKk/R5XHiiGTHpRG9Zf4LHgt9fnGPx12N8R6IK4TOhsEVCHptQhWsZZ43MPFHyOs0e8+Z3qigwPhsaTkisWK+qtLF4YL625CfUZVcO8nDcGr+CqE8Sp66NUPjxMW0WmITRPdCkgvDIUyFKOK+ox7jIfHB8sJslgCZtB+TmS1ihc4Rabuhz3Gw2OE9W1Yv6kpe2FQaIXSiGBLTXm649LjgzX10FKD8EOC0j5OzXQqC+NhUX7K1uV/7tRfxjtgjf+l65r/efdIPguriNRCOBDL0Q3JtUPttP6lS2MdsMa6L7l0FFijj3bVLCuGTXTS7R9EfJ2SDfWX5+6fGlzjF48E67uKdlmE+jyR1S4ZPBAFK/n1EWCdOhqsb2PKmHOY+n/lvkU8izBSHj58cWiwppyQlJh+Tye3C2AhlFDD4c3hwdrWg6FpoqBEWUq8ALBkp2D2B0ODNXpDhe9xeGvf55PbhRFSc2nrXmekcGywzi3rNTiAFSxWoVmkJzzGEGE91pMdCStItNT2PxVoGWRosL6p63USuekvSLBCoemhwxptwpo96dYPJH4isJ4FE5ZatTi5bjgbrG7IXQc/zNFwzoWFAwaL6NCBxf86PFhPG5scggVLbmtTQWlieEHp2Rt6ScmEoPSkmz+QMnK6I2HFLh3Bso6WdZja1vuy4K0DNd0JZSk21US60pV16Exn9XrkiBNpW0+kcbAm0qElJ0UjPv/q7Xb1TCt3XnOktPLotyo5Kzaw10OM/hBfQ2RFwap3LbMeWw5+9N2Ks2pI108awCDihGInrTy8BYvRR2ofG5s0aaDSynIjrtqiEf9kiKs75zYVLNskwVmw4CFeo4Qo/x4d6lKY3hbCCPH10YoO8XVk6nC6+tUQYY1+XFR7aHImIoEZDnmBYnclbKjL998l9X5SjH1/IKwhXnNC0mFvDPnmnnRaeQvePh0Q01KZv2XlPcLD3XI0tayXLDZQYPohz1Cq8zNiq9tlHeuWI2dnSImQwMx4biETq03Dxmw3q2PdJvnomd7tgDFaO2kK3lSATqA3HPUIHI55t7JeOoTx0P9nfpX4KjLNSdUL6z164fHC+qHinPkNxt4/tb6KVCe0PuvB6nh3K3+j1w5ZGf6GAJgWX6UE76nPt9JrG7xHWPLszpQ+j/mm+vkX+uJz8kzP1Pip8fFxeSoMfn5rDH7UB53gt7sJBWsSvFYAdodkKEHEycJ9caGH/vb9pXZ9/7euaz75+AepSxcvXrx06Y/q5/+9qKR+/uF79fP/tT7xjvrl3Y+3tGkhEoDAVM50iF6LtmLRXop1K9ypWFT9b3IyFpuMTZb0L/L3ybDzhFLrLyV1FfxHzw9LBPv+QIoM3s1NbVgGO7ryXY+0HHE9XM57l02EfJ4wlecF8KSXSgLS9Cwr7qrxIGNWMVq0Wo9L2wlby/L4wobaLImQn09nchk2YB1jeWnPrluqxjSJW9+AxTdkgSxz1268itiU15myKFTVMyyY80AYf8u/Jw4LsggGIbbH5oiJJizkwGIJVV0G3DN2Sx4YYs6ttkLIsndaNgEf7+dJD6VE52Y8wnJpYdOBBRMVWb5H1vwhMdaARRFWj5rY86tD5AKw/HuEh09Di8qHVvFoh2WSXTuhpRmwKphUPWHEU4SQcBMWqYNbsyeB42a/eiRN5WVkuuZT0+JL0vl47YQaVkq0jWHGJsYr8heRrBgt3dDckNeJFWeBzaNsYhK/nirPQnciFe+NkbBycjy0ms0D71VUptkyGoo5k8wVQUkId3MDwBJ7sksPUDZ2iKLNaiEeYalCZKhRvcZgYWid1XXdHDgwIqtJmt5HD/16G3L08GP8MIMI2uxq6eGwoPXg0UuNamsVANKFGyxLllyTA61TOsWzLHh5NO238IHzaQrNtgdpi+yGsk5di2VViJOwaIeFZShhqgKlg3RDGYnAXfSW32itypqrsYE+d+Wz5EjYCN9ZCXB0dTTps+oy3Lch4BqsH8qODVGIr5w8l0VVTLI3WB+R3TDVVoANQlKE9BBhNetvASxTlWtgRei1lQHfJAkGKXfV+IWXLOUAEeNgPcSB1dF0gEUSQkYJ5UQzdDBxXVYWE2Gw3gFhGSKHTF+Vs+OhVQp+pXgEy2q/hcnogCQTxTpuTgVE3UTlaDQWLSmUg72J9FoY3fEPKxBPQwyAB2tIL8syNvVsR/5rt8ByJ4d4wOEQWIEz9dvOB74qa5YPOhp2wWK2tB5Z1LZlIl13ptsIQohBYhPtBE266iu7UkrLyU58AFosR0iXZTFrQla9xZvRpoMvEyc3YU4MkNEydI1Ef24D5KvSJAZpDWM96kHK5F8p3FaNs5khHLAPxgkmyId25WT+sEvrebLJzRKUPdLL3lPLkpUv+6CSPBntpmgmO9cgJt1Vhqa61im6r/JwCVzUdZkMc/OGHBf8ygq0Bt5Zr+xcjnTox/Od+nvnJZFI1zXn/9F1zd+7rvmx85JreipB/FxxjEMA4WTn4td4x1O/HjndrpF/6oqq+e86rjn9u993XhJ6o+uFftNxFpNH9GYajNC0j2HdQmhbTUwS8+0keMgLrNCRYJ3+TefLRHT1rmXfwyorWNHIScJa2FGwyn6GFZKw5lxY7c8MF1ZVb+IJCKywH2Ct+BvWqgurdKKwFnUxyw3/Lu6E1HQaPVawdvxgWXV/w1pCaPlFwBqRF4+8AFh+3v5XQ+bmc3bDkdP7+9ch0ry+/xyWpY+Hzfk6gA/JDUfG8zn487fL1dxKuJTMkZ+vHzXO0rCeIn9l3zskN4boA06RjqDaAyzO+chP2yVLiDlD7cdKpMj133de5AGWE8ELZCI/l3bNUFOVN2fF+cFhhUJ3louCwc1unl1Y1cuLvCO67QuL84hOcGPT10fpClSvGTN7UFjyxytb+suYSuFm4s/eXOh4IQ+WNa/Wy+I+P+8EsEw147euDmpZvHB5QmeSWaJlXxEztiK8DaoHWFeUK1AFHnwsPuuuVV0eGNbtRNVdQH1stO4O3Yq0vZAHBz+r7iti6u+iNNNIl4Jn9QEn0vxqWLjbiVi0GqtU3NQyM+YWW1/IAyy9JFvx+wGeVYT1Xzqx2PZ4X1iRqrA23FVai5SKxcnk45RaLWJx0iz+68XB65iUVf0dZsnD0XpjN6tEBrEsHkLgqqpux9tIqCS8SOzmZEqfle7wQWA5kUMd+3tvN88gk8Sd7F/bE4fC4qH5cL4xCLJYgxpLLEeFkWe05YX6w7qmDNKCMMvPgyEIYRzWRZUH8lkIwquks/zPVporqYztgg9smT15gaVt28aI+tmwdJExZxbb/vjhsBZ2gEjVWc9u+i4VaSUnmGHdHqAbLupaGCXi52yWlEzSqMUwcFptjx8Oaz4BljXhLGdbu23bcUQlJ8TWYuOF+sKaj+qqwf6eGYZ06Vszrqq5toWlfXzWbYk35e6UmGvfHS6SVbGz4FzcFxbnzn4IE+J3X8PihZC7pUM8HQCW3BvT9FmVipDff9v47lWRizZWi/rB4oVFbZjyuxl8Xq6U8zWEdXHzSusCz+GwFuV3T7CoO39m9RgrTdSrjV0mbLl41bNl6V7IkjgAtR1qFKlvZGgfD/vAUl+XY9VdX5XfJaW4kVh2d8ex+A03P9zfZyEd99NAVO+hzrdBiomsZ8tK6SphrtNilUkh5znbbgzBKle8woq4R8ppAOpgQD80nVXpay2PHgoro79nL152YFll/fVoiQmXnn3NK6zbTrEC4vexUClLTaRPdW8ttsxnDoNVcL5GNaYTWkbZ8VasbuRV9qGZTOwHK7KjNzsTHISSkjxEnK39LHHFIywVOsh+t1kuMmYvu3tTIbCce7oSgwnPTsSjg9dxg3TvPl4Fa1Ga6vmhIVINr9UH1rwq02mUbatanss1dg+KnC2ElcoxsVFovNBhsHjEGVFNf2eUmyogaqZ0Z7jdbOOhsLJVIYwijH751q2TrJhTjr+Ua+YSD4e1+NgZD0y/T3UaukWdb95mpXnu9p7DUzSourJS7dyPaukKT3mR2q15gcX5Zd2BLRIUw5KZeOycCxRbznJDv6xDpGIw1nkGlrqhhIVanN8hsCJJPYomCZ32efTe1CoyneMWlvPdG30zpV2HwZhNmmFXxBOsRSf0sGEoXPTNYZ3DxXmBUuJ4j8Rl/Vg/WAsTbakGZiTrViPIuhzyBAvpO1g9UN9SJE9LY6dLlK7JDtF/weJaqUGLCatSbq4dWsstC60Hw3IdlqiYlAYgxnLE1ZKY6f7t8yFPi6xXYiIvl8CEFd5aCbecD3i24GXdkF/RhUpYHJOAFaLOUIRuOMFS9Rr3tCJ9pcTsYmWC5krxlvDBeta29NEbFjjGq65lbvt6V1YvyVNi5q5uskjKSWLfRVbOr6JcJRYXLSdR8qKIFkIhD5Z1xWHFchjhQkC8e0Pr1HVb0BOv9IclFSlH2w62ivjE1VD7Vb32wf8aWIWdt0oGKMRqiMta1G7RDxG9vejt0MDPyxWb6UVDYRXv3t73dGhg0T2yyUo4aJXzlXQRHzdTHF8+39l5umFxtZntpxsbyUolmXpIft6Xm9n678/60c1SiCjx5ymwfuKydDc2XVpG6t7pkT6w3D2l+9dBapekh51/I6fvpXTXzYsYQTRgzt2V3I6LsXvIElz1eY+wTjex9oU1ch4VnWFQTBLTfxUvvIqnZQGDksi7QTm53sLhBWztHhnZv53MNyZF4Nunh9S0Fy4uVy9wS8krZudu73uyLI+w9n9qpu2NFDbpekDNKiTdVmiJYow23HCcCfuje9cd43o+WCOnR/Z/eii3oDqx65yJg+qvtLhcoaaqrkW+gStFzruwuuQZ1sjp6/fkxiTXZmPgrqj/1wkPFdDKyGkiSbZUS7H2tv96/XlgjZze/xkn482Jt5WDkMFPVUGOrjVpW+ViMwXDWKK6+dP1N3ioM0PXBxaX17+x/zPJFQ3RnD7K2sBoxud7sTyKy0VqTHItWWOI0BPJlSvzCx24+lrWYuTqjWqxJasK/XpFmtVqYDKjfcQz0zD3QTjZWqpV5mKKyTq5FllYVAkvaTc9YSl74osLkfnLm5+H9UTbZQWzR1lVi/h7v8xA4qEskaVxAVd7PpQJw45Wdp+Sa/PzkYWFBRW7t+kfC5HI/PzV2adbyVLCEm1VMxiLpzBYFV0KaiR6kNJIzqxxyu6oEqLmzEbcjpZ2dpKu9kAVR6Vw0Y5bQnRWF4GenJPVU9Baodv5BV2FNJUlFHG9ZImOdvcvMNJ1vbBKczJcoGsvUQ9sinPApQoB41zY6jIU75LebhKCBdkDpzMvWw9sUW0GjAGBS96o2L0sxgMpFi9t6BJbdDUjE9YvLS3OM2mCVHckJFdJWIZnYoqtHU5typqllNLp2kvnqXopm1YFsUxMTFLOVcI2IBPdHtxhJORThhUvllIrcAsxKcCeWSpIVK8ALFCm9h6SjdYF6ggq13PJSrhHhUVRqqZ263ObxCnwDSaF1vx8PvVFyxnpM7VbVA2QqpifCWbWVafNEFWinnJIIfpeTU5reHAWUV+IVFjOC9mlWzMSgnJjuN6+kYYZW0hGUorTzK2lrLNxgvuxXPIQpOYyhUy2ll6llJibrSUWmVUmgCpdq2WVOb2ahNrFHVedmYUJN4k2HJdIqFrdTU6vYbVqjZpmo6K8iMrJzMxrRL0kfdgdGeLnNKs9gnTp2te0ekj2xRqiJlJufgIRSmuh16wOlsxCmxjZRl2G6Yv9b3ilxQvT4LhwmVA0+4oFU0fSKlVf3+TvMgM+EZcHywK/rjUscZ5R31v1mpYn8VDmdbjuWa/NKvj6fxCQWSJcrHVTAAAAAElFTkSuQmCC",
    "titles": {
        "La Liga": "27 titles",
        "Copa del Rey": "31 titles",
        "UEFA Champions League": "5 titles",
        "Cup Winners Cup": "4 titles",
        "League Cup": "2 titles",
        "International Champions Cup": "1 title",
        "Audi Cup": "1 title",
        "Copa Del Rey": "31 titles",
        "La-liga": "27 titles",
        "Inter-Cities Fairs Cup": "4 titles",
        "SuperCopa": "14 titles"
    },
    "players": [
        { "firstName": "Marc-Andre", "lastName": "Ter-Stegen", "position": "Goal-keeper" },
        { "firstName": "Andres", "lastName": "Christensen", "position": "Defender" },
        { "firstName": "Jules", "lastName": "Kounde", "position": "Defender" },
        { "firstName": "Marcos", "lastName": "Alonso", "position": "Defender" },
        { "firstName": "Ronald", "lastName": "Araujo", "position": "Defender" },
        { "firstName": "Fermin", "lastName": "Lopez", "position": "Mid-fielder" },
        { "firstName": "Sergio", "lastName": "Roberto", "position": "Mid-fielder" },
        { "firstName": "Frenkie", "lastName": "De Jong", "position": "Mid-fielder" },
        { "firstName": "Robert", "lastName": "Lewandowski", "position": "Forward" },
        { "firstName": "Ferran", "lastName": "Torres", "position": "Forward" },
        { "firstName": "Vitor", "lastName": "Roque", "position": "Forward" },
        { "firstName": "Jao", "lastName": "Felix", "position": "Forward" }
    ]
};

// Function to display club information
function displayClubInfo() {
    var clubInfo = document.getElementById('club-info');
    clubInfo.innerHTML += `<img src="${clubData.crest}" alt="FC Barcelona Crest">`;
    clubInfo.innerHTML += `<p><strong>Name:</strong> ${clubData.name}</p>`;
    clubInfo.innerHTML += `<p><strong>Founded:</strong> ${clubData.year}</p>`;
    clubInfo.innerHTML += `<p><strong>Coach:</strong> ${clubData.coach}</p>`;
    clubInfo.innerHTML += `<p><strong>Stadium:</strong> ${clubData.stadium}</p>`;
    clubInfo.innerHTML += `<h2>Titles:</h2>`;
    clubInfo.innerHTML += `<ul>`;
    for (var title in clubData.titles) {
        clubInfo.innerHTML += `<li>${title}: ${clubData.titles[title]}</li>`;
    }
    clubInfo.innerHTML += `</ul>`;
}

// Function to display players in a table
function displayPlayersTable() {
    var playersTable = document.getElementById('players-table');
    var table = `<table><tr><th>First Name</th><th>Last Name</th><th>Position</th></tr>`;
    clubData.players.forEach(player => {
        table += `<tr><td>${player.firstName}</td><td>${player.lastName}</td><td>${player.position}</td></tr>`;
    });
    table += `</table>`;
    playersTable.innerHTML += table;
}

// Call functions to display club information and players table
displayClubInfo();
displayPlayersTable();
