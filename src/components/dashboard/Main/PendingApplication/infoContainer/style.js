import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    infoContainerMain: {
        flexGrow: 1,
    },
    infoBoxNumber: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 50,
        lineHeight: ' 180%',
        textAlign: 'center',
        color: '#ED2147'
    },
    infoBoxNumberActive: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 50,
        lineHeight: ' 180%',
        textAlign: 'center',
        color: '#fff'
    },
    infoBox_text: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: ' 180%',
        textAlign: 'center',
        color: '#ED2147'
    },
    infoBox_textActive: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: ' 180%',
        textAlign: 'center',
        color: '#fff'
    },
    active_sign: {
        position: 'absolute',
        height: 0,
        width: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '-30px',
        borderTop: '30px solid #ED2147',
        borderLeft: '31px solid transparent',
        borderRight: ' 31px solid transparent',
    }


}));
