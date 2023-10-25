export const patientsOfAge = (patients) => {
    let counts = {
        child: 0,
        teen: 0,
        adult: 0,
        older: 0
    };

    patients.forEach(patient => {
        if (patient.age < 18) {
            counts.child++;
        } else if (patient.age >= 18 && patient.age <= 30) {
            counts.teen++;
        } else if (patient.age > 30 && patient.age <= 50) {
            counts.adult++;
        } else {
            counts.older++;
        }
    });

    return [["Total Patient", "Overview"], ...Object.entries(counts)];
};