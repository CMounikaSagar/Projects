export const Card = ({ children }: { children: React.ReactNode }) =>{
    const cardStyle = {
        
        padding:'100px',
        margin:'10px',
        display:'flex',
        border:'1px solid #ddd',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f6ff',
        boxShadow:'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
    }
    return <div style={cardStyle}>{children}</div>
}