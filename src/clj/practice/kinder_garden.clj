(ns practice.kinder-garden
  (:require [clojure.string :as s]))

;;http://garajeando.blogspot.com/2015/05/exercism-kindergarten-garden-in-clojure.html
;;https://github.com/trikitrok/MyExercismExercises/blob/master/clojure/kindergarten-garden/README.md

(defn char->plant[s]
  (map #(case %
         \V "Violets"
         \R "Radishes"
         \C "Clover"
         \G "Grass") s))

(defn kinder[names rows]
  (apply merge-with concat
         (map
           #(zipmap (sort names) (partition 2 %))
           (map char->plant (s/split-lines rows)))))

(defn kinder-thread-last[names rows]
  (->> rows
       (s/split-lines)
       (map #(map { \V "Violets" \R "Radishes" \C "Clover" \G "Grass" } %))
       (map #(zipmap (sort names) (partition 2 %)))
       (apply merge-with concat)))

(def ch ["Alice" "Bob" "Charlie" "David" "Eve" "Fred" "Ginny" "Harriet" "Ileana" "Joseph" "Kincaid" "Larry"])
(def rows "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV")

(prn (kinder ch rows))

(prn (kinder-thread-last ch rows))