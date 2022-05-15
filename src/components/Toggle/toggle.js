import { motion } from "framer-motion"

const toggle = ({ theme, setCurrentTheme }) => {

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
  };

  return (
    <div className="switch" data-isOn={theme} onClick={() => setCurrentTheme(!theme)}>
      <motion.div
        className="handle"
        data-isOn={theme}
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .6 }}
        layout
      />
    </div>
  )
}

export default toggle