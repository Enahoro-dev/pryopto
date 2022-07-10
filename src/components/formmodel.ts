interface form{
    id:number,
    name:string,
    placeholder:string,
    type:string
}

export const forms:form[]= [{
    id:1,
    name:'firstname',
    placeholder:'First Name',
    type:'text'
},{
    id:2,
    name:'lastname',
    placeholder:'Last Name',
    type:'text'
},{
    id:3,
    name:'email',
    placeholder:'Email',
    type:'email'
},{
    id:4,
    name:'phone',
    placeholder:'Phone Number',
    type:'number'
},{
    id:5,
    name:'comapany',
    placeholder:'Company Name (Not required)',
    type:'text'
},{
    id:6,
    name:'budget',
    placeholder:'Budget ($)',
    type:'number'
},]