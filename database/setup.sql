DROP TABLE plants;
DROP TYPE insolation;
DROP TYPE wetness;
DROP TYPE dryness_resistance;
DROP TYPE wetness_resistance;

CREATE TYPE insolation AS ENUM ('sunny', 'overcast', 'penumbra', 'shadow');
CREATE TYPE wetness AS ENUM ('drenched', 'wet', 'moist', 'dry');
CREATE TYPE dryness_resistance AS ENUM ('good', 'mediocre', 'bad');
CREATE TYPE wetness_resistance AS ENUM ('good', 'bad');

CREATE TABLE plants (
    name VARCHAR(50),
    icon VARCHAR(100),
    preferred_insolation insolation,
    preferred_wetness wetness,
    resistance_to_dryness dryness_resistance,
    resistance_to_wetness wetness_resistance
);