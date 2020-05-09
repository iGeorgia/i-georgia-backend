CREATE
  (place:Place),
  (provider:Provider),
  (trip:Trip),
  (activity:Activity),
  (transport:Transport),
  (season:Season),
  (activity)-[:`IS_GOOD_FOR` ]->(season),
  (place)-[:`IS_GOOD_FOR` ]->(activity),
  (place)-[:`IS_GOOD_FOR` ]->(season),
  (place)-[:`SUPPORTS` ]->(transport),
  (provider)-[:`IS_IN` ]->(place),
  (provider)-[:`OWNS` ]->(trip),
  (trip)-[:`ENDS_IN` ]->(place),
  (trip)-[:`IS_GOOD_FOR` ]->(season),
  (trip)-[:`STARTS_IN` ]->(place),
  (trip)-[:`USES` ]->(transport);

CREATE CONSTRAINT ON (p:Place) ASSERT p.name IS UNIQUE;
CREATE CONSTRAINT ON (s:Season) ASSERT s.name IS UNIQUE;
