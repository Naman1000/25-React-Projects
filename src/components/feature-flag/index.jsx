import { useContext } from "react"
import Accordian from "../accordian"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TreeView from "../TreeView1"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags() {

    const {loading, enableFlags} = useContext(FeatureFlagsContext)


    
    const ComponentsToRender=[
        {
            key : "showLightAndDarkMode",
            component : <LightDarkMode />
        },
        {
            key : "showRandomColorGenerator",
            component : < RandomColor />
        },
        {
            key : "showAccordian",
            component : <Accordian />
        },
        {
            key : "showTreeView",
            component : < TreeView />
        },
    ];

    function checkEnabledFlags(getCurrentKey){
        return enableFlags[getCurrentKey];
    }

    if(loading) return <h1>Loading data ! Please Wait</h1>


    return(
        <div>
            <h2>Feature Flags</h2>
            {
                ComponentsToRender.map((Item)=> 
                checkEnabledFlags(Item.key) ? Item.component : null ) 
            }
        </div>
    )
}