let prodata = 0;
let count = 0;
let Ssss = "";
let count1 =0;
function addProject() {

    if (prodata == 0) {
    let projectId = document.getElementById('proj');
    let projectId1 = document.getElementById('dep');

    let projectdata = projectList();

    for(let i=0;i<projectdata.length;i++)
    {
        pd=projectdata[i].projectName;
          pidd = projectdata[i].projectId;
          projectdata1 = projectdata[i].technology;
          prtchname=projectdata1[i].department
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(pd);
        newOption.appendChild(optionText);
        projectId.appendChild(newOption);
        const newOtion1 = document.createElement('option');
        const optionText1 = document.createTextNode(prtchname);
        newOtion1.appendChild(optionText1);
       projectId1.appendChild(newOtion1);
    }
    
    }
    alert("Data submitted")
}
function getteam(e) {
    document.getElementById('jumbo').style.display="block";
    document.getElementById('jumbo2').style.display="none";
    removeItem();
    if (count == 0) {
        let filterList = projectdata.filter((item) => {
            return item.projectName == e;
        });
        let technology = filterList.reduce(item => { return item.technology });
        let teamtotaldata = technology.technology;
        Ssss = teamtotaldata;
        for (let s of teamtotaldata) {
            var list = document.getElementById('data');
            var listItem = document.createElement('li');
            listItem.id = s.techId;
            const textValue = document.createElement('b');
            textValue.innerHTML= "Technology :" + s.techname + ","+"<br>"  +"Member:"  +s.member + ","+"<br>"
             +"Department:" +s.department +","+"<br>"+"Startdate:"+s.sod+","+"<br>"+"EndDate:"+s.eod+"<hr>"; 
            listItem.appendChild(textValue);
            list.appendChild(listItem);
        }
    }
    count++;
}

function getteam1(r) {
    document.getElementById('jumbo').style.display="none";
    document.getElementById('jumbo2').style.display="block";
    removeItem();
    let projectdata = projectList();
    
    for(let i=0;i<projectdata.length;i++)
    {
          projectdata1 = projectdata[i].technology;
          prtchname=projectdata1[i].techId
        if (count1 == 0) {
         listOfFilteredteam = projectdata1.filter(ele =>{
         return ele.department == r ;
  
});   
  for(let c of listOfFilteredteam){
            let list = document.getElementById('dpId');
            let listItem2 = document.createElement('li');
            listItem2.id = c.techId;
            const textValue = document.createElement( "b");
            textValue.innerHTML=" DepartmentName : " + c.department +","+"<br>"+"Issues : "+ c.issues +"," +"<br>"+ "PendingIssues : "+
             c.pendingissue+","+"<br>"+ "FixedIssues : "+c.fixeddata+"<hr>";
            listItem2.appendChild(textValue);
            list.appendChild(listItem2);
        }
        
    }
    count ++;
}
}

function removeItem() {
    let projectdata = projectList();
    if (prodata > 0) {
        for (let i of projectdata) {
            let removeid = document.getElementById(i.projectId)
            removeid.remove()
        }
        prodata = 0;
    }
    if (count > 0) {
        for (let a1 of Ssss) {
            let listItem = document.getElementById(a1.techId);
            listItem.remove();
        }
        count = 0;
      
    }
  
    if (count1 > 0) {
        for (let r of listOfFilteredteam) {
            let listItem2 = document.getElementById(r.techId)
            listItem2.remove()
        }
        count1 = 0;
    }
}

