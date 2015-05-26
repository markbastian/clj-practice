(ns practice.cryptosquare
  ;(:require [clojure.string :as s])
  )

;;https://github.com/trikitrok/MyExercismExercises/blob/master/clojure/crypto-square/README.md
;;http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html#easy

(require '[clojure.string :as s])

(defn crypto-square[s]
  (let[ss (-> s s/lower-case (s/replace #"[^a-z]" ""))
       l (-> ss count Math/sqrt Math/ceil int)]
    (->> ss
         (partition l l (repeat ""))
         (apply map vector)
         (map #(apply str %))
         (s/join " "))))

(prn (crypto-square "If man was meant to stay on the ground god would have given us roots"))
(prn (crypto-square "Have a nice day. Feed the dog & chill out!"))