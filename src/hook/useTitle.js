import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title}- HomoService`;
    }, [title])
}
export default useTitle;