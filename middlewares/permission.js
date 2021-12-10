
const permission = ( ...allowedRoles) => {
 return (req, res, next) =>  {
    const { Vendedor } = req;
    if (Vendedor && allowedRoles.includes(Vendedor.type)){
     return next(); 
    }
    return res.status(403).json({ message: 'Forbidden' });
 }
}

module.exports = permission;