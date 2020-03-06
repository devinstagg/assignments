import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter((senator) => {
    return senator.party == 'Republican';
  })
}

export const democrats = () => {
  return Senators.filter((senator) => {
    return senator.party == 'Democrat';
  })
}

export const independents = () => {
  return Senators.filter((senator) => {
    return senator.party == 'Independent';
  })
}

export const males = () => {
  return Senators.filter((senator) => {
    return senator.person.gender == 'male';
  })
}

export const females = () => {
  return Senators.filter((senator) => {
    return senator.person.gender == 'female';
  })
}

export const byState = (state = 'UT') => {
  return Senators.filter((senator) => {
    return senator.state == 'UT';
  })
}

export const mapping = () => {
  return Senators.map((senator) => {
    return { firstName: '', lastName: '', party: '', gender: ''}
  })
}
export const reducedCount = () => {
  return Senators.reduce((count, senator) => {
    switch(senator.party) {
    case 'Republican':
      count.republican++
      break
    case 'Democrat':
      count.democrat++
      break
    case 'Independent':
      count.independent++
      break
    }
      return count

}, {
  republican: 0,
  democrat: 0,
  independent: 0
})
}