let projectdata =[
    {
        projectId: 101,
        projectName: 'RecruitEx',
        technology: [
            {
            techId: 1,
            techname: 'Angular',
            member:'Madhurupa',
            department:'Sales',
            issues:'error occured in login page',
            pendingissue:'need to complete the login issues',
            fixeddata:'fixed the button colors',
            sod:'21-08-2018',
            eod:'18-09-2019',
           
        },
        {
            techId: 2,
            techname: 'Java',
            department:'Sales',
            member:'Naga',
            issues:'error occured Candidates Api',
            pendingissue:'need to complete occured issue in Api',
            fixeddata:'fixed the query',
            sod:'21-01-2019',
            eod:'11-08-2019',
       
        }
    ]
      },
      {
        projectId: 102,
        projectName: 'OBS',
        technology: [
            {
            techId: 3,
            techname: 'Angular',
            department:'HR',
            member:'Vidya',
            department:'HR',
            issues:'error occured in login page',
            pendingissue:'need to complete the login issues',
            fixeddata:'fixed the button colors',
            sod:'02-02-2017',
            eod:'22-08-2018',
       
        },
        {
            techId: 4,
            techname: 'Java',
            member:'Mounika',
            department:'HR',
            issues:'error occured Candidates Api',
            pendingissue:'need to complete occured issue in Api',
            fixeddata:'fixed the query',
            sod:'12-03-2018',
            eod:'13-08-2018',
         
        }]
      }    
]

function projectList() {
    console.log(projectdata);
    return projectdata;
}

// function getteachidbydepartment(techId) {
//     let resultList = []
//     projectdata.map(a => {
//         let teamdataaa = a.technology
//         for (let i in teamdataaa) {
//             let techhh = teamdataaa[i].techId
//             if(techhh == techId){
//                 let dp={
//                     department:a.department,
//                     techId:a.techId,
//                     // title:songs[i]
//                 }
//                 resultList.push(dp)
//             }
//         }
//     })
//     return resultList
// }
