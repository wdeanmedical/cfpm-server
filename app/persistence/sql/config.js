const interpolate = (template, args, updateList) => {
  return template(args, updateList)
}

const getStatement = (req, args, updateList) => {
  const cleanArgs = args.map(arg => req.conn.escape(arg)) // escape all arguments to prevent injection
  const { method } = req
  const { path } = req.route
  const statement = interpolate(config[path][method], cleanArgs, updateList)
  return statement
}

const selectCompany = args => {
  return `
    SELECT 
    name, nickname, aboutUs, category, EIN, website, founded, size, corpGroup,
    addressOne, addressTwo, city, state, zipCode, hqAddressOne, hqAddressTwo, 
    hqCity, hqState, hqZipCode, companyID, memberSince,
    facebookUrl, linkedinUrl, twitterUrl, instagramUrl
    FROM company
    WHERE companyID = ${args[0]}
  `
}

const updateCompany = (args, updateList) => {
  return `
    UPDATE company
    SET 
      updatedAt = ROUND(UNIX_TIMESTAMP(UTC_TIME(4)) * 1000),
      ${updateList}
    WHERE companyID = ${args[0]}
  `
}

const selectUser = args => {
  return `
    SELECT 
    aboutMe, currentCity, currentState, userID, username, firstName, lastName, citizenType,
    memberSince,addressOne, addressTwo, phone, city, state, zipCode,
    facebookUrl, linkedinUrl, twitterUrl, instagramUrl
    FROM user
    WHERE userID = ${args[0]}
  `
}

const updateUser = (args, updateList) => {
  return `
    UPDATE user
    SET 
      updatedAt = ROUND(UNIX_TIMESTAMP(UTC_TIME(4)) * 1000),
      ${updateList}
    WHERE userID = ${args[0]}
  `
}

const selectCitizenAboutMe = args => {
  return ` SELECT aboutMe FROM user WHERE userID = ${args[0]}`
}

const selectForm = args => {
  return `SELECT id, template FROM forms WHERE id = ${args[0]}`
}

const deleteMember = args => {
  return `
    UPDATE company_user
    SET 
      deletedAt = ROUND(UNIX_TIMESTAMP(UTC_TIME(4)) * 1000),
      deleted = 1
    WHERE memberID = ${args[0]}
  `
}

const config = {
  ['/public/getForm']: { GET: selectForm },
}

module.exports = { getStatement }
