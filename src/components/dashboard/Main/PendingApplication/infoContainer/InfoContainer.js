import {Card, CardContent, Typography, useMediaQuery} from "@material-ui/core";
import './style.css'
import {useTheme} from "@material-ui/core/styles";
export default function InfoContainer({active}) {
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down("xs"));

        return(
            <div style={{position:"relative",cursor:'pointer'}}>
                <Card style={active?{background:'#ED2147'}:{}} className="infoBox_main">
                    <CardContent>
                        <Typography style={active?{ fontStyle: 'normal', fontWeight: 600, fontSize: 50, lineHeight:' 180%', textAlign: 'center', color: '#fff'}:{ fontStyle: 'normal', fontWeight: 600, fontSize: 50, lineHeight:' 180%', textAlign: 'center', color: '#ED2147'}}>
                            10
                        </Typography>
                        <Typography style={active?{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 11, lineHeight:' 180%', textAlign: 'center', color: '#fff'}:{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 11, lineHeight:' 180%', textAlign: 'center', color: '#ED2147'}}>
                            Total Application
                        </Typography>



                    </CardContent>


                </Card>
                {active&&
                <div className="active_sign">

                </div>
                }
            </div>
        )

}