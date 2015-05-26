(ns practice.queen-attack)

;;http://garajeando.blogspot.com/2015/05/exercism-queen-attack-in-clojure.html
;;https://github.com/trikitrok/MyExercismExercises/blob/master/clojure/queen-attack/README.md

(defn queen-attack-old?[w b]
  (let[d (map - w b)]
    (or
      (some zero? d)
      (apply = (map #(Math/abs %) d)))))

;(defn queen-attack?[w b]
;  (some zero? ((juxt first second #(reduce - %) #(reduce + %)) (map - w b))))

(defn queen-attack?[w b]
  (let [diff (map - w b)
        zs ((juxt first second #(reduce - %) #(reduce + %)) diff)]
    (true? (some zero? zs))))

;(defn queen-attack?[w b]
;  (->> (map - w b)
;       ((juxt first second #(apply - %) #(apply + %)))
;       (some zero?)))

(prn (queen-attack? [2 3] [2 10]))
(prn (queen-attack? [9 10] [2 10]))
(prn (queen-attack? [4 3] [2 10]))
(prn (queen-attack? [7 12] [5 10]))
(prn (queen-attack? [7 12] [5 10]))

(prn (queen-attack? [1 1] [5 5]))
(prn (queen-attack? [7 7] [5 5]))
(prn (queen-attack? [5 5] [7 3]))
(prn (queen-attack? [7 3] [5 5]))
(prn (queen-attack? [7 3] [3 7]))
(prn (queen-attack? [0 0] [8 4]))
(prn (queen-attack? [0 0] [-4 4]))