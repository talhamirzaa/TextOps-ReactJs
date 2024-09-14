import React,{useState} from 'react'

export default function TextForm(props) {

  const [txt, setTxt] = useState('');
  const [wc,setwc]=useState(0);
  // Txt="New value" //wrong method
  //setTxt("Enter your Text here"); //correct method
  

  const setUpclick=()=>{
    //console.log("btn clicked");
    //let res=txt.toUpperCase();//storing in new var
    setTxt(txt.toUpperCase());
  }

  const setLoclick=()=>{
    var rslt=txt.toLowerCase();
    setTxt(rslt)
  }

  //my added functn
  const HandleEmpLineclick=()=>{
    let bld=txt.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');;
    setTxt(bld);
  }

  //my added functn
  const HandleClearAll=()=>{
    setTxt('');
    setwc(0);
  }

  let setOnchange=(event)=>{
    
    setTxt(event.target.value);
  }

  //to count words
  const wordcount=()=>
  {
    // eslint-disable-next-line
    let res = [];
    let str = txt.replace(/[\t\n\r]/gm, " ").split(" ");
    console.log(str);
    str.map((s) => {
       let trimStr = s.trim();
       console.log(trimStr);
      if (trimStr.length > 0) {
        res.push(trimStr);
      }
    });
     setwc(res.length);
  }

  
  return (
    <>
    <div className='conatiner my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h4>{props.head}</h4>
        <textarea className="form-control" value={txt} placeholder='Enter your Text Here...' onChange={setOnchange} onInput={wordcount} 
        style={{backgroundColor:props.mode==='dark'?'#476481':'white',color: props.mode==='dark'?'white':'#3e5871'}} id="inptext" rows="7"></textarea>
      </div>
      <button className="btn btn-primary" onClick={setUpclick}>Upper case</button>
      <button className="btn btn-primary mx-2" onClick={setLoclick}>Lower case</button>
      <button className="btn btn-primary" onClick={HandleEmpLineclick}>Remove Empty Line</button>
      <button className="btn btn-primary mx-2" onClick={HandleClearAll}>Clear All</button>
      
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h4>Your Text Details</h4>
      <p>Word Count:{wc}  &  Character Count:{txt.length}</p>
      <h3>Preview</h3>
      <p>{txt}</p>
      </div>
      </>
  )
}
