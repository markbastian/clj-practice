(ns practice.funcs
  (:require [clojure.string :as s]))

;(defn add54 [x] (+ x 54))
;
;(defn ^:export add5 [x] (+ x 5))
;document.getElementById("demo").innerHTML = 5 + 6;
;(defn ^:export init[]
;  (set!
;    (.-onload js/window)
;    (when (and js/document (.-getElementById js/document))
;      (let [input (.getElementById js/document "cryptosquare-input")
;            output (.getElementById js/document "cryptosquare-output")]
;        (do)))))

(defn ^:export crypto-square[s]
  (let[ss (-> s s/lower-case (s/replace #"[^a-z]" ""))
       l (-> ss count Math/sqrt Math/ceil int)]
    (->> ss
         (partition l l (repeat ""))
         (apply map vector)
         (map #(apply str %))
         (s/join " "))))

(defn ^:export kinder-thread-last[names rows]
  (->> rows
       (s/split-lines)
       (map #(map { \V "Violets" \R "Radishes" \C "Clover" \G "Grass" } %))
       (map #(zipmap (sort names) (partition 2 %)))
       (apply merge-with concat)))

(defn ^:export map-step[m clue]
  (let [n (get-in m [(dec (quot clue 10)) (dec (rem clue 10))])]
    (when (not= n clue) n)))

(defn ^:export treasure-hunt [m start]
  (take-while identity (iterate (partial map-step m) start)))

(defn ^:export queen-attack?[w b]
  (let [diff (map - w b)
        zs ((juxt first second #(reduce - %) #(reduce + %)) diff)]
    (true? (some zero? zs))))