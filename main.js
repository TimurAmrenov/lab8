let lab1 = [5, 5, 5, 5, 10, 10]

let sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5]

let lab2 = [5, 5, 5, 5, 5, 5, 10]

let sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] +lab2[5] + lab2[6]

let lab3 = [5, 9, 10, 12]

let sum3 = lab3[0] + lab3[1] + lab3[2] + lab3[3]

let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 0]

let sum4_5 = lab4_5[0] + lab4_5[1] + lab4_5[2]+lab4_5[3]+lab4_5[5]+lab4_5[5]+lab4_5[6]+lab4_5[7]+lab4_5[8]+lab4_5[9]+lab4_5[10]

let lab6 = [5, 5, 10, 0, 5, 10]

let sum6 = lab6[0]+lab6[1]+lab6[2]+lab6[3]+lab6[4]+lab6[5]

let sums = [sum1, sum2, sum3, sum4_5, sum6]

let sums_avg = (sum1 + sum2 + sum3 +sum4_5+sum6)/6

let quiz1 = 36

let total_score = (quiz1*0.4+sums_avg*0.6)

const results = {
    lab1: [5, 5, 5, 5, 10, 10], // array of scores for lab1
    lab2: [5, 5, 5, 5, 5, 5, 10], // array of scores for lab2
    lab3: [5, 9, 10, 12], // array of scores for lab3
    lab4_5: [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 0], // array of scores for lab4 and 5
    lab6: [5, 5, 10, 0, 5, 10], // array of scores for lab6
    quiz1: 36/0.4, // score of quiz1
    sums: [sum1, sum2, sum3, sum4_5, sum6], // array of sums of each lab
    total_score: total_score/0.4, // computed total score
    }

console.log(results)