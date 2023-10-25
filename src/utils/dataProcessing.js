export const processData = (patients) => {
    const genderCounts = patients.reduce((acc, patient) => {
      const genderKey = patient.gender.toLowerCase() === 'man' ? 'man' : patient.gender.toLowerCase() === 'woman' ? 'woman' : null;

      if (genderKey) {
        acc[genderKey] = (acc[genderKey] || 0) + 1;
      }

      return acc;
    }, {});

    return [
      { name: 'Gender Stats', man: genderCounts.man || 0, woman: genderCounts.woman || 0 }
    ];
}
