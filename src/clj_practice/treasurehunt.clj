(ns clj-practice.treasurehunt)

;http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html


(defn map-step[m clue]
  (let [n (get-in m [(dec (quot clue 10)) (dec (rem clue 10))])]
    (when (not= n clue) n)))

(defn treasure-hunt [m start]
  (take-while identity (iterate (partial map-step m) start)))

(def treasure-map [[34 21 32 41 25]
                   [14 42 43 14 31]
                   [54 45 52 42 23]
                   [33 15 51 31 35]
                   [21 52 33 13 23]])

(prn (treasure-hunt treasure-map 11))