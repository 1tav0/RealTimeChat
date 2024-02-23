
const GenderCheckbox = ({onCheckboxChanged, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span>
            Male
          </span>
          <input type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={()=>onCheckboxChanged("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span>
            Female
          </span>
          <input type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={()=>onCheckboxChanged("female")}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox


//STARTER CODE FOR THE GENDER CHECKBOX COMPONENT 

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span>
//             Male
//           </span>
//           <input type="checkbox"
//             className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span>
//             Female
//           </span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckbox