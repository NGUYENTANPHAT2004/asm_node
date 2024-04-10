import student from "../models/student";
export const getall = async(req,res) => {
  try {
    const data = await student.find({});
    if(!data) return res.status(404).json({message : "không tìm thấy sinh viên"});
    return res.status(200).json({message : "lấy dữ liệu thành công",data});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export const getbyid = async(req,res) =>{
   try {
    const data = await student.findById(req.params.id);
    if(!data) return res.status(404).json({message : "không tìm thấy sinh viên"});
    return res.status(200).json({message : "lấy dữ liệu thành công",data});
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}
export const create = async(req,res) =>{
    try {
        const data = await student.create(req.body);
        if(!data) return res.status(404).json("thêm mới thất bại");
        return res.status(201).json({message : "thêm mới thành công thành công",data});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const update = async (req, res) => {
  try {

      const { error } = studentVaidator.validate(req.body, { abortEarly: true });

      if (error) return res.status(400).json({ message: error.details[0].message });

      const data = await student.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!data) return res.status(400).json({ message: "Cập nhật thất bại" });

      return res.status(200).json({ message: "Cập nhật thành công", data });

  } catch (error) {

      return res.status(500).json({ message: error.message });

  }
}

export const delete_student = async (req, res) => {
  try {

      const data = await student.findByIdAndDelete(req.params.id);

      if (!data) return res.status(404).json({ message: "Xóa thất bại" });

      return res.status(200).json({ message: "Xóa thành công", data });

  } catch (error) {

      return res.status(500).json({ message: error.message });

  }
} 