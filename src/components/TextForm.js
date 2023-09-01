import React,{useState} from 'react'

export default function TextForm(props) {

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

  const [txt, setTxt] = useState('');
  const [wc,setwc]=useState(0);
  // Txt="New value" //wrong method
  //setTxt("Enter your Text here"); //correct method
  return (
    <>
    <div className='conatiner my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h2>{props.head}</h2>
        <textarea className="form-control" value={txt} placeholder='Enter your Text Here...' onChange={setOnchange} onInput={wordcount} 
        style={{backgroundColor:props.mode==='dark'?'#476481':'white',color: props.mode==='dark'?'white':'#3e5871'}} id="inptext" rows="7"></textarea>
      </div>
      <button className="btn btn-primary" onClick={setUpclick}>Uppdercase</button>
      <button className="btn btn-primary mx-3" onClick={setLoclick}>Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={HandleEmpLineclick}>Remove Empty Line</button>
      
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
