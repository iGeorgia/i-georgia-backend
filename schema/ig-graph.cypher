CREATE
  (:Place {name: 'Batumi'}),
  (:Place {name: 'Gudauri'}),
  (:Place {name: 'Kutaisi'}),
  (:Place {name: 'Tbilisi'})

CREATE
  (:GoodFor {name: 'hiking'})

MATCH (p:Place)
  WHERE p.name IN ['Batumi', 'Gudauri', 'Kutaisi', 'Tbilisi']
SET p:EntryPoint
RETURN labels(p)

MATCH (p:Place)
SET p - > GoodFor {name:"hiking"}
