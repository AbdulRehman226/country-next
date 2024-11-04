// import { getDisplayName } from "next/dist/shared/lib/utils";
// import Image from "next/image";
import Link from "next/link";
export default function Home (){
    return (
        <div style={{margin:"10px" ,  }}>
            <h1>Country List</h1>
            <Link href="/country/pakistan" style={{margin:"10px", borderRadius: "10px",border: "2px solid black", padding:"10px",color:"green"  }}>Pakistan</Link>
            <Link href="/country/india" style={{margin:"10px", borderRadius: "10px",border: "2px solid black", padding:"10px", color:"orange" }}>India</Link>
        
            <Link href="/country/pakistan" style={{margin:"10px", borderRadius: "10px",border: "2px solid black", padding:"10px",color:"red"  }}>Afghanistan</Link>
            
            <Link href="/country/pakistan" style={{margin:"10px", borderRadius: "10px",border: "2px solid black", padding:"10px",color:"green"  }}>China</Link>
            
            <Link href="/country/pakistan" style={{margin:"10px", borderRadius: "10px",border: "2px solid black", padding:"10px",color:"green"  }}>Iran</Link>
        </div>
    )
}
